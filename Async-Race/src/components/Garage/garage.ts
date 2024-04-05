import carParameters from '../../interfaces/carParameters';
import getCarsResponse from '../../interfaces/getCarsResponse';
import winnersResponse from '../../interfaces/winnersResponse';
import APIService from '../../services/APIService';
import CreateElement from '../../utils/createElement';
import generateCarInstances from '../../utils/generateCarInstances';
import Winners from '../Winners/winners';
import BtnToWinners from './components/btnToWinners';
import ChangePageBtns from './components/changePageBtns';
import ContainerGarageHeader from './components/containerGarageHeader';
import ControlsBtns from './components/controlsBtns';
import CreateCar from './components/createCar';
import CreateCarBlock from './components/createCarBlock';
import UpdateCarBlock from './components/updateCarBlock';
import WinnerMessage from './components/winnerMessage';
import './garage.scss';

class Garage {
    private APIService = new APIService();

    private currentPage = 1;

    private carsPerPage: number = 7;

    private animationId: Map<string, number> = new Map();

    private isThereWinner: boolean = true;

    public create(): void {
        this.createView();
        this.getCars();
    }

    private createView() {
        const garageWrapper: HTMLElement = new CreateElement({
            tag: 'div',
            cssClasses: ['wrapperGarage'],
            event: {
                type: 'click',
                callback: this.removeWinnerMessage,
            },
        }).getElement();
        const wrapperControl = new CreateElement({
            tag: 'div',
            cssClasses: ['wrapperControl'],
        }).getElement();
        const containerGarage = new CreateElement({
            tag: 'div',
            cssClasses: ['containerGarage'],
        }).getElement();

        const createCarBlock = new CreateCarBlock(this.createCarCallback.bind(this)).get();
        const updateCarBlock = new UpdateCarBlock(this.updateCarCallback.bind(this)).get();
        const controlsBtns = new ControlsBtns(
            this.race.bind(this),
            this.reset.bind(this),
            this.generateCars.bind(this),
        ).get();
        const btnToWinners = new BtnToWinners(this.toWinners.bind(this)).get();
        const containerGarageHeader = new ContainerGarageHeader().get();
        const changePageBtns = new ChangePageBtns(this.nextPage.bind(this), this.prevPage.bind(this)).get();

        wrapperControl.append(createCarBlock, updateCarBlock, controlsBtns);
        garageWrapper.append(btnToWinners, wrapperControl, containerGarageHeader, containerGarage, changePageBtns);
        document.body.append(garageWrapper);
    }

    private async getCars() {
        const response: Response = await this.APIService.getCars(this.currentPage, this.carsPerPage);
        const cars: getCarsResponse[] = await response.json();
        const totalCars = response.headers.get('X-Total-Count') as string;
        cars.forEach((car) => {
            const createCar = new CreateCar();
            createCar.createCar(
                car.name,
                car.color,
                car.id as number,
                this.selectCar.bind(this),
                this.deleteCarCallback.bind(this),
                this.startCarCallback.bind(this),
                this.stopCarCallback.bind(this),
            );
        });
        this.nextAndPrevVisability(totalCars);
        this.setCarCount(totalCars);
    }

    private nextAndPrevVisability(totalCars: string) {
        if (parseInt(totalCars, 10) > this.currentPage * this.carsPerPage) {
            document.querySelector('.nextPage')?.classList.remove('inactive');
        } else {
            document.querySelector('.nextPage')?.classList.add('inactive');
        }
        if (this.currentPage > 1) {
            document.querySelector('.previousPage')?.classList.remove('inactive');
        } else {
            document.querySelector('.previousPage')?.classList.add('inactive');
        }
    }

    private async createCarCallback() {
        const carNameInput = document.querySelector('.inputCarNameCreate') as HTMLInputElement;
        const carColorInput = document.querySelector('.inputColorCreate') as HTMLInputElement;
        if (carNameInput.value === '') {
            return;
        }
        const car: getCarsResponse = {
            name: carNameInput.value,
            color: carColorInput.value,
        };
        this.createCar(car);
        carNameInput.value = '';
    }

    private async createCar(car: getCarsResponse) {
        const response = await this.APIService.createCar(car);
        const carResp: getCarsResponse = await response.json();
        if (document.querySelector('.containerGarage')?.childElementCount !== this.carsPerPage) {
            const createCar = new CreateCar();
            createCar.createCar(
                carResp.name,
                carResp.color,
                carResp.id as number,
                this.selectCar.bind(this),
                this.deleteCarCallback.bind(this),
                this.startCarCallback.bind(this),
                this.stopCarCallback.bind(this),
            );
        }

        let carCount = ((document.querySelector('.countCar') as HTMLElement).textContent as string).slice(2, -2);
        carCount = (parseInt(carCount, 10) + 1).toString();
        this.setCarCount(carCount);

        this.nextAndPrevVisability(carCount);
    }

    private async deleteCarCallback(event: Event) {
        const deleteBtn = event.target as HTMLButtonElement;
        const carBlock = deleteBtn.closest('.carBlock') as HTMLElement;
        await this.APIService.deleteCar(carBlock.classList[1]);
        this.APIService.removeWinner(carBlock.classList[1]);
        carBlock.remove();

        this.cleanGarage();
        this.getCars();
    }

    private async selectCar(event: Event) {
        const deleteBtn = event.target as HTMLButtonElement;
        const carBlock = deleteBtn.closest('.carBlock') as HTMLElement;
        const carId = carBlock.classList[1];
        const updateCarBlock = document.querySelector('.wrapperUpdateCar') as HTMLElement;

        updateCarBlock.classList.remove('inactive');
        updateCarBlock.classList.remove(updateCarBlock.classList[2]);
        updateCarBlock.classList.add(carId);

        const car = await this.APIService.getCar(carId);

        const inputCarNameUpdate = document.querySelector('.inputCarNameUpdate') as HTMLInputElement;
        const carColorInput = document.querySelector('.inputColorUpdate') as HTMLInputElement;

        inputCarNameUpdate.value = car.name;
        carColorInput.value = car.color;
    }

    private async updateCarCallback(event: Event) {
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
        await this.APIService.updateCar(carId, data);

        this.cleanGarage();
        this.getCars();
        this.disableUpdateBlock();
    }

    private disableUpdateBlock() {
        const updateCarBlock = document.querySelector('.wrapperUpdateCar') as HTMLElement;
        const inputCarNameUpdate = document.querySelector('.inputCarNameUpdate') as HTMLInputElement;
        const carColorInput = document.querySelector('.inputColorUpdate') as HTMLInputElement;

        updateCarBlock.classList.remove(updateCarBlock.classList[2]);
        updateCarBlock.classList.add('inactive');
        inputCarNameUpdate.value = '';
        carColorInput.value = '#000000';
    }

    private nextPage() {
        this.currentPage += 1;
        this.changePage();
    }

    private prevPage() {
        this.currentPage -= 1;
        this.changePage();
    }

    private changePage() {
        this.cleanGarage();
        this.getCars();
        this.setCurrentPage();
        this.animationId.forEach((value, key) => {
            cancelAnimationFrame(value);
            this.animationId.delete(key);
        });
    }

    private disableChangePage() {
        const nextPage = document.querySelector('.nextPage') as HTMLElement;
        const prevPage = document.querySelector('.previousPage') as HTMLElement;
        nextPage.classList.add('inactive');
        prevPage.classList.add('inactive');
    }

    private enableChangePage() {
        const carCount = ((document.querySelector('.countCar') as HTMLElement).textContent as string).slice(2, -2);
        this.nextAndPrevVisability(carCount);
    }

    private cleanGarage() {
        const garage = document.querySelector('.containerGarage') as HTMLElement;
        while (garage.firstChild) {
            garage.firstChild.remove();
        }
    }

    private setCurrentPage() {
        const pageNumber = document.querySelector('.pageNumber') as HTMLElement;
        pageNumber.textContent = `Page #${this.currentPage}`;
    }

    private setCarCount(totalCars: string) {
        const countCar = document.querySelector('.countCar') as HTMLElement;
        countCar.textContent = `( ${totalCars} )`;
    }

    private generateCars() {
        const cars = generateCarInstances(100);
        cars.forEach((car) => {
            this.createCar(car);
        });
    }

    private async startCarCallback(event: Event) {
        const startBtn = event.target as HTMLElement;
        const carId = startBtn.closest('.carBlock')?.classList[1] as string;
        const carIcon = startBtn.closest('.carBlock')?.querySelector('.carIcon') as HTMLElement;
        const stopBtn = startBtn.closest('.carBlock')?.querySelector('.btnStop') as HTMLElement;

        this.startCar(carIcon, carId, startBtn, stopBtn);
    }

    private async startCar(carIcon: HTMLElement, carId: string, startBtn: HTMLElement, stopBtn: HTMLElement) {
        const data: carParameters = await this.APIService.startEngine(carId);
        const duration = data.distance / data.velocity;
        const road = document.querySelector('.road') as HTMLElement;
        if (road === null) {
            return;
        }
        const endX = road.offsetWidth - carIcon.clientWidth;

        startBtn.classList.add('inactive');
        stopBtn.classList.remove('inactive');

        this.animationCar(carIcon, duration, endX, carId);

        try {
            await this.APIService.checkEngine(carId);
        } catch (e) {
            cancelAnimationFrame(this.animationId.get(carId) as number);
            this.animationId.delete(carId);
        }
    }

    private animationCar(car: HTMLElement, duration: number, endX: number, carId: string) {
        const startX = car.offsetLeft;
        let currentX = startX;
        let startTime = 0;

        const step = (currentTime: number) => {
            let diff = currentTime - startTime;
            startTime = currentTime;
            if (diff > 20) {
                diff = 16;
            }
            const framesCount = duration / diff;
            const dx = (endX - startX) / framesCount;
            currentX += dx;
            car.setAttribute('style', `left: ${currentX}px`);
            if (currentX < endX) {
                this.animationId.set(carId, requestAnimationFrame(step));
            }
            if (currentX > endX && !this.isThereWinner) {
                this.isThereWinner = true;
                this.createWinnerBlock(carId);
                this.setWinner(carId, duration);
            }
        };

        this.animationId.set(carId, requestAnimationFrame(step));
    }

    private async setWinner(carId: string, duration: number) {
        const winner: winnersResponse = {
            id: parseInt(carId, 10),
            wins: 1,
            time: Math.round(duration) / 1000,
        };

        try {
            await this.APIService.createWinner(winner);
        } catch (e) {
            const winnerInfo: winnersResponse = await this.APIService.getWinner(carId);
            winnerInfo.wins += 1;
            if (Math.round(duration) / 1000 < winnerInfo.time) {
                winnerInfo.time = Math.round(duration) / 1000;
            }
            this.APIService.updateWinner(winnerInfo);
        }
    }

    private async createWinnerBlock(carId: string) {
        const car = await this.APIService.getCar(carId);
        const winnerMessage = new WinnerMessage();
        winnerMessage.createWinnerMessage(car.name);
        setTimeout(() => {
            document.querySelector('.winnerMessage')?.remove();
        }, 3000);
    }

    private race(event: Event) {
        const raceBtn = event.target as HTMLElement;
        raceBtn.classList.add('inactive');
        document.querySelector('.btnReset')?.classList.remove('inactive');
        this.disableChangePage();
        this.isThereWinner = false;
        const garage = document.querySelector('.containerGarage') as HTMLElement;
        const cars = garage.querySelectorAll('.carBlock');
        cars.forEach((car) => {
            const carIcon = car.querySelector('.carIcon') as HTMLElement;
            const carId = car.classList[1];
            const startBtn = car.querySelector('.btnStart') as HTMLElement;
            const stopBtn = startBtn.closest('.carBlock')?.querySelector('.btnStop') as HTMLElement;
            this.startCar(carIcon, carId, startBtn, stopBtn);
        });
    }

    private async stopCarCallback(event: Event) {
        const stopBtn = event.target as HTMLElement;
        const carId = stopBtn.closest('.carBlock')?.classList[1] as string;
        const carIcon = stopBtn.closest('.carBlock')?.querySelector('.carIcon') as HTMLElement;
        const startBtn = stopBtn.closest('.carBlock')?.querySelector('.btnStart') as HTMLElement;

        this.stopCar(carIcon, carId, startBtn, stopBtn);
    }

    private async stopCar(carIcon: HTMLElement, carId: string, startBtn: HTMLElement, stopBtn: HTMLElement) {
        const resp: carParameters = await this.APIService.stopEngine(carId);
        if (resp.velocity === 0) {
            if (this.animationId.has(carId)) {
                cancelAnimationFrame(this.animationId.get(carId) as number);
                this.animationId.delete(carId);
            }
            carIcon.setAttribute('style', 'left: 80px');
            startBtn.classList.remove('inactive');
            stopBtn.classList.add('inactive');
        }
    }

    private reset(event: Event) {
        const resetBtn = event.target as HTMLElement;
        resetBtn.classList.add('inactive');
        document.querySelector('.btnRace')?.classList.remove('inactive');
        this.enableChangePage();
        const garage = document.querySelector('.containerGarage') as HTMLElement;
        const cars = garage.querySelectorAll('.carBlock');
        this.isThereWinner = true;
        cars.forEach((car) => {
            const carIcon = car.querySelector('.carIcon') as HTMLElement;
            const carId = car.classList[1];
            const startBtn = car.querySelector('.btnStart') as HTMLElement;
            const stopBtn = startBtn.closest('.carBlock')?.querySelector('.btnStop') as HTMLElement;
            this.stopCar(carIcon, carId, startBtn, stopBtn);
        });
    }

    private removeWinnerMessage() {
        document.querySelector('.winnerMessage')?.remove();
    }

    private remove() {
        const wrapper = document.querySelector('.wrapperGarage') as HTMLElement;
        wrapper.classList.add('hidden');
    }

    private toWinners() {
        this.remove();
        Winners.toWinners();
        const wrapper = document.querySelector('.winnersWrapper') as HTMLElement;
        wrapper.classList.remove('hidden');
    }
}

export default Garage;
