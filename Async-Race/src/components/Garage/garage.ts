import carParameters from '../../interfaces/carParameters';
import getCarsResponse from '../../interfaces/getCarsResponse';
import winnersResponse from '../../interfaces/winnersResponse';
import APIService from '../../services/APIService';
import generateCarInstances from '../../utils/generateCarInstances';
import Winners from '../Winners/winners';
import CreateViewGarage from './createViewGarage';
import './garage.scss';

class Garage {
    private static APIService = new APIService();

    private static currentPage = 1;

    private static carsPerPage: number = 7;

    private static animationId: Map<string, number> = new Map();

    private static isThereWinner: boolean = true;

    static create(): void {
        const createView = new CreateViewGarage();
        createView.create();
        Garage.getCars();
    }

    static async getCars() {
        try {
            const response: Response = await Garage.APIService.getCars(Garage.currentPage, Garage.carsPerPage);
            const cars: getCarsResponse[] = await response.json();
            const totalCars = response.headers.get('X-Total-Count') as string;
            cars.forEach((car) => {
                CreateViewGarage.createCar(car.name, car.color, car.id as number);
            });
            Garage.nextAndPrevVisability(totalCars);
            Garage.setCarCount(totalCars);
        }
        catch(e) {
            alert('Включите JSON сервер');
        }
    }

    static nextAndPrevVisability(totalCars: string) {
        if (parseInt(totalCars, 10) > (Garage.currentPage * Garage.carsPerPage)) {
            document.querySelector('.nextPage')?.classList.remove('inactive');
        } else {
            document.querySelector('.nextPage')?.classList.add('inactive');
        }
        if (Garage.currentPage > 1) {
            document.querySelector('.previousPage')?.classList.remove('inactive');
        } else {
            document.querySelector('.previousPage')?.classList.add('inactive');
        }
    }

    static async createCarCallback() {
        const carNameInput = document.querySelector('.inputCarNameCreate') as HTMLInputElement;
        const carColorInput = document.querySelector('.inputColorCreate') as HTMLInputElement;
        if (carNameInput.value === '') {
            return;
        }
        const car: getCarsResponse = {
            name: carNameInput.value,
            color: carColorInput.value,
        };
        Garage.createCar(car);
        carNameInput.value = '';
    }

    static async createCar(car: getCarsResponse) {
        const response = await Garage.APIService.createCar(car);
        const carResp: getCarsResponse = await response.json();
        if (document.querySelector('.containerGarage')?.childElementCount !== Garage.carsPerPage) {
            CreateViewGarage.createCar(carResp.name, carResp.color, carResp.id as number);
        }

        let carCount = ((document.querySelector('.countCar') as HTMLElement).textContent as string).slice(2, -2);
        carCount = (parseInt(carCount, 10) + 1).toString();
        Garage.setCarCount(carCount);

        Garage.nextAndPrevVisability(carCount);
    }

    static async deleteCarCallback(event: Event) {
        const deleteBtn = event.target as HTMLButtonElement;
        const carBlock = deleteBtn.closest('.carBlock') as HTMLElement;
        await Garage.APIService.deleteCar(carBlock.classList[1]);
        Garage.APIService.removeWinner(carBlock.classList[1]);
        carBlock.remove();

        Garage.cleanGarage();
        Garage.getCars();
    }

    static async selectCar(event: Event) {
        const deleteBtn = event.target as HTMLButtonElement;
        const carBlock = deleteBtn.closest('.carBlock') as HTMLElement;
        const carId = carBlock.classList[1];
        const updateCarBlock = document.querySelector('.wrapperUpdateCar') as HTMLElement;

        updateCarBlock.classList.remove('inactive');
        updateCarBlock.classList.remove(updateCarBlock.classList[2]);
        updateCarBlock.classList.add(carId);

        const car = await Garage.APIService.getCar(carId);

        const inputCarNameUpdate = document.querySelector('.inputCarNameUpdate') as HTMLInputElement;
        const carColorInput = document.querySelector('.inputColorUpdate') as HTMLInputElement;

        inputCarNameUpdate.value = car.name;
        carColorInput.value = car.color;
    }

    static async updateCarCallback(event: Event) {
        const updateBtn = event.target as HTMLButtonElement;
        const carNameInput = document.querySelector('.inputCarNameUpdate') as HTMLInputElement;
        const carColorInput = document.querySelector('.inputColorUpdate') as HTMLInputElement;
        if (carNameInput.value === '') {
            return;
        }
        const data = {
            name: carNameInput.value,
            color: carColorInput.value,
        };
        const carId = updateBtn.closest('.wrapperUpdateCar')?.classList[2] as string;
        await Garage.APIService.updateCar(carId, data);

        Garage.cleanGarage();
        Garage.getCars();
        Garage.disableUpdateBlock();
    }

    static disableUpdateBlock() {
        const updateCarBlock = document.querySelector('.wrapperUpdateCar') as HTMLElement;
        const inputCarNameUpdate = document.querySelector('.inputCarNameUpdate') as HTMLInputElement;
        const carColorInput = document.querySelector('.inputColorUpdate') as HTMLInputElement;

        updateCarBlock.classList.remove(updateCarBlock.classList[2]);
        updateCarBlock.classList.add('inactive');
        inputCarNameUpdate.value = '';
        carColorInput.value = '#000000';
    }

    static nextPage() {
        Garage.currentPage += 1;
        Garage.changePage();
    }

    static prevPage() {
        Garage.currentPage -= 1;
        Garage.changePage();
    }

    static changePage() {
        Garage.cleanGarage();
        Garage.getCars();
        Garage.setCurrentPage();
        Garage.animationId.forEach((value, key) => {
            cancelAnimationFrame(value);
            Garage.animationId.delete(key);
        });
    }

    static disableChangePage() {
        const nextPage = document.querySelector('.nextPage') as HTMLElement;
        const prevPage  = document.querySelector('.previousPage') as HTMLElement;
        nextPage.classList.add('inactive');
        prevPage.classList.add('inactive');
    }

    static enableChangePage() {
        const carCount = ((document.querySelector('.countCar') as HTMLElement).textContent as string).slice(2, -2);
        Garage.nextAndPrevVisability(carCount);
    }

    static cleanGarage() {
        const garage = document.querySelector('.containerGarage') as HTMLElement;
        while (garage.firstChild) {
            garage.firstChild.remove();
        }
    }

    static setCurrentPage() {
        const pageNumber = document.querySelector('.pageNumber') as HTMLElement;
        pageNumber.textContent = `Page #${Garage.currentPage}`;
    }

    static setCarCount(totalCars: string) {
        const countCar = document.querySelector('.countCar') as HTMLElement;
        countCar.textContent = `( ${totalCars} )`;
    }

    static generateCars() {
        const cars = generateCarInstances(100);
        cars.forEach((car) => {
            Garage.createCar(car);
        });
    }

    static async startCarCallback(event: Event) {
        const startBtn = event.target as HTMLElement;
        const carId = startBtn.closest('.carBlock')?.classList[1] as string;
        const carIcon = startBtn.closest('.carBlock')?.querySelector('.carIcon') as HTMLElement;
        const stopBtn = startBtn.closest('.carBlock')?.querySelector('.btnStop') as HTMLElement;

        Garage.startCar(carIcon, carId, startBtn, stopBtn);
    }

    static async startCar(carIcon: HTMLElement, carId: string, startBtn: HTMLElement, stopBtn: HTMLElement) {
        const data: carParameters = await Garage.APIService.startEngine(carId);
        const duration = data.distance / data.velocity;
        const road = document.querySelector('.road') as HTMLElement;
        if (road === null) {
            return;
        }
        const endX = road.offsetWidth - carIcon.clientWidth;

        startBtn.classList.add('inactive');
        stopBtn.classList.remove('inactive');

        Garage.animationCar(carIcon, duration, endX, carId);

        try {
            await Garage.APIService.checkEngine(carId);
        }
        catch(e) {
            cancelAnimationFrame(Garage.animationId.get(carId) as number);
            Garage.animationId.delete(carId);
        }
    }

    static animationCar(car: HTMLElement, duration: number, endX: number, carId: string) {
        const startX = car.offsetLeft;
        let currentX = startX;
        let startTime = 0;

        function step(currentTime: number) {
            let diff = currentTime - startTime;
            startTime = currentTime;
            if (diff > 20) {
                diff = 16;
            }
            const framesCount = (duration / diff);
            const dx = (endX - startX) / framesCount;
            currentX += dx;
            car.setAttribute('style', `left: ${currentX}px`);
            if (currentX < endX) {
                Garage.animationId.set(carId, requestAnimationFrame(step));
            }
            if (currentX > endX && !Garage.isThereWinner) {
                Garage.isThereWinner = true;
                Garage.createWinnerBlock(carId);
                Garage.setWinner(carId, duration);
            }
        }

        Garage.animationId.set(carId, requestAnimationFrame(step));
    }

    static async setWinner(carId: string, duration: number) {
        const winner: winnersResponse = {
            id: parseInt(carId),
            wins: 1,
            time: Math.round(duration) / 1000,
        }
        
        try {
           await Garage.APIService.createWinner(winner);
        }
        catch(e) {
            const winnerInfo: winnersResponse = await Garage.APIService.getWinner(carId);
            winnerInfo.wins += 1;
            if ((Math.round(duration) / 1000) < winnerInfo.time) {
                winnerInfo.time = (Math.round(duration) / 1000);
            }
            Garage.APIService.updateWinner(winnerInfo);
        }
    }

    static async createWinnerBlock(carId: string) {
        const car = await Garage.APIService.getCar(carId);
        CreateViewGarage.createWinnerMessage(car.name);
        setTimeout(() => {
            document.querySelector('.winnerMessage')?.remove();
        }, 3000);
    }

    static race(event: Event) {
        const raceBtn = event.target as HTMLElement;
        raceBtn.classList.add('inactive');
        document.querySelector('.btnReset')?.classList.remove('inactive');
        Garage.disableChangePage();
        Garage.isThereWinner = false;
        const garage = document.querySelector('.containerGarage') as HTMLElement;
        const cars = garage.querySelectorAll('.carBlock');
        cars.forEach((car) => {
            const carIcon = car.querySelector('.carIcon') as HTMLElement;
            const carId = car.classList[1];
            const startBtn = car.querySelector('.btnStart') as HTMLElement;
            const stopBtn = startBtn.closest('.carBlock')?.querySelector('.btnStop') as HTMLElement;
            Garage.startCar(carIcon, carId, startBtn, stopBtn);
        });
    }

    static async stopCarCallback(event: Event) {
        const stopBtn = event.target as HTMLElement;
        const carId = stopBtn.closest('.carBlock')?.classList[1] as string;
        const carIcon = stopBtn.closest('.carBlock')?.querySelector('.carIcon') as HTMLElement;
        const startBtn = stopBtn.closest('.carBlock')?.querySelector('.btnStart') as HTMLElement;

        Garage.stopCar(carIcon, carId, startBtn, stopBtn);
    }

    static async stopCar(carIcon: HTMLElement, carId: string, startBtn: HTMLElement, stopBtn: HTMLElement) {
        const resp: carParameters = await Garage.APIService.stopEngine(carId);
        if (resp.velocity === 0) {
            if (Garage.animationId.has(carId)) {
                cancelAnimationFrame(Garage.animationId.get(carId) as number);
                Garage.animationId.delete(carId);
            }
            carIcon.setAttribute('style', 'left: 80px');
            startBtn.classList.remove('inactive');
            stopBtn.classList.add('inactive');
        }
    }

    static reset(event: Event) {
        const resetBtn = event.target as HTMLElement;
        resetBtn.classList.add('inactive');
        document.querySelector('.btnRace')?.classList.remove('inactive');
        Garage.enableChangePage();
        const garage = document.querySelector('.containerGarage') as HTMLElement;
        const cars = garage.querySelectorAll('.carBlock');
        Garage.isThereWinner = true;
        cars.forEach((car) => {
            const carIcon = car.querySelector('.carIcon') as HTMLElement;
            const carId = car.classList[1];
            const startBtn = car.querySelector('.btnStart') as HTMLElement;
            const stopBtn = startBtn.closest('.carBlock')?.querySelector('.btnStop') as HTMLElement;
            Garage.stopCar(carIcon, carId, startBtn, stopBtn);
        });
    }

    static removeWinnerMessage() {
        document.querySelector('.winnerMessage')?.remove();
    }

    static remove() {
        const wrapper = document.querySelector('.wrapperGarage') as HTMLElement;
        wrapper.classList.add('hidden');
    }

    static toWinners() {
        Garage.remove();
        const wrapper = document.querySelector('.winnersWrapper') as HTMLElement;
        wrapper.classList.remove('hidden');
        Winners.cleanTable();
        Winners.getWinners();
    }
}

export default Garage;
