import carParameters from '../interfaces/carParameters';
import getCarsResponse from '../interfaces/getCarsResponse';
import winnersResponse from '../interfaces/winnersResponse';

class APIService {
    private url: string = 'http://127.0.0.1:3000';

    private options = {
        garage: '/garage',
        engine: '/engine',
        winners: '/winners',
    };

    public async getCars(currentPage: number, carsPerPage: number) {
        const response: Response = await fetch(
            `${this.url}${this.options.garage}?_page=${currentPage}&_limit=${carsPerPage}`,
        );
        return response;
    }

    public async getCar(id: string) {
        const response: Response = await fetch(`${this.url}${this.options.garage}/${id}`);
        const car: getCarsResponse = await response.json();
        return car;
    }

    public async createCar(car: getCarsResponse) {
        const response = await fetch(`${this.url}${this.options.garage}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(car),
        });
        return response;
    }

    public async updateCar(id: string, data: getCarsResponse) {
        const response = await fetch(`${this.url}${this.options.garage}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response;
    }

    public async deleteCar(id: string) {
        await fetch(`${this.url}${this.options.garage}/${id}`, {
            method: 'DELETE',
        });
    }

    public async startEngine(id: string) {
        const response: Response = await fetch(`${this.url}${this.options.engine}?id=${id}&status=started`, {
            method: 'PATCH',
        });
        const data: carParameters = await response.json();
        return data;
    }

    public async checkEngine(id: string) {
        const response = await fetch(`${this.url}${this.options.engine}?id=${id}&status=drive`, {
            method: 'PATCH',
        });
        const data = await response.json();
        return data;
    }

    public async stopEngine(id: string) {
        const response: Response = await fetch(`${this.url}${this.options.engine}?id=${id}&status=stopped`, {
            method: 'PATCH',
        });
        const data: carParameters = await response.json();
        return data;
    }

    public async getWinners(currentPage: number, winnersPerPage: number, sort: string, order: string) {
        const response: Response = await fetch(
            `${this.url}${this.options.winners}?_page=${currentPage}&_limit=${winnersPerPage}&_sort=${sort}&_order=${order}`,
        );
        return response;
    }

    public async getWinner(id: string) {
        const resp: Response = await fetch(`${this.url}${this.options.winners}/${id}`);
        const data: winnersResponse = await resp.json();
        return data;
    }

    public async createWinner(winner: winnersResponse) {
        const resp: Response = await fetch(`${this.url}${this.options.winners}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(winner),
        });
        const data: winnersResponse = await resp.json();
        return data;
    }

    public async updateWinner(winner: winnersResponse) {
        const resp: Response = await fetch(`${this.url}${this.options.winners}/${winner.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(winner),
        });
        const data: winnersResponse = await resp.json();
        return data;
    }

    public async removeWinner(id: string) {
        await fetch(`${this.url}${this.options.winners}/${id}`, {
            method: 'DELETE',
        });
    }
}

export default APIService;
