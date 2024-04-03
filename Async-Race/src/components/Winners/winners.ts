import getCarsResponse from '../../interfaces/getCarsResponse';
import winnersResponse from '../../interfaces/winnersResponse';
import APIService from '../../services/APIService';
import CreateViewWinners from './createViewWinners';
import './winners.scss';

class Winners {
    private static APIService = new APIService();

    private static winnersPerPage = 10;

    private static currentPage = 1;

    private static sort = 'time';

    private static order = 'ASC';

    static create() {
        const createView = new CreateViewWinners();
        createView.create();
        Winners.getWinners();
    }

    static remove() {
        const wrapper = document.querySelector('.winnersWrapper') as HTMLElement;
        wrapper.classList.add('hidden');
    }

    static toGarage() {
        Winners.remove();
        const wrapper = document.querySelector('.wrapperGarage') as HTMLElement;
        wrapper.classList.remove('hidden');
    }

    static async getWinners() {
        const response: Response = await Winners.APIService.getWinners(Winners.currentPage, Winners.winnersPerPage, Winners.sort, Winners.order);
        const winners: winnersResponse[] = await response.json();
        const totalWinners = response.headers.get('X-Total-Count') as string;

        for(let i = 0; i < winners.length; i += 1) {
            const winnerCar: getCarsResponse = await Winners.APIService.getCar(winners[i].id.toString());

            CreateViewWinners.createRow((i + 1) + (Winners.currentPage - 1) * 10, winnerCar.color, winnerCar.name, winners[i].wins, winners[i].time);
        }
        
        Winners.nextAndPrevVisability(totalWinners);
        Winners.setWinnersCount(totalWinners);
    }

    static nextAndPrevVisability(totalWinners: string) {
        if (parseInt(totalWinners, 10) > (Winners.currentPage * Winners.winnersPerPage)) {
            document.querySelector('.nextPageWinners')?.classList.remove('inactive');
        } else {
            document.querySelector('.nextPageWinners')?.classList.add('inactive');
        }
        if (Winners.currentPage > 1) {
            document.querySelector('.previousPageWinners')?.classList.remove('inactive');
        } else {
            document.querySelector('.previousPageWinners')?.classList.add('inactive');
        }
    }

    static setTimeSort() {
        Winners.sort = 'time';
        Winners.changeOrder();
        Winners.cleanTable();
        Winners.getWinners();
    }

    static setWinsSort() {
        Winners.sort = 'wins';
        Winners.changeOrder();
        Winners.cleanTable();
        Winners.getWinners();
    }

    static changeOrder() {
        if (Winners.order === 'ASC') {
            Winners.order = 'DESC';
        } else {
            Winners.order = 'ASC';
        }
    }

    static setWinnersCount(totalWinners: string) {
        const countCar = document.querySelector('.countWinners') as HTMLElement;
        countCar.textContent = `( ${totalWinners} )`;
    }

    static nextPage() {
        Winners.currentPage += 1;
        Winners.changePage();
    }

    static prevPage() {
        Winners.currentPage -= 1;
        Winners.changePage();
    }

    static changePage() {
        Winners.cleanTable();
        Winners.getWinners();
        Winners.setCurrentPage();
    }

    static setCurrentPage() {
        const pageNumber = document.querySelector('.pageNumberWinners') as HTMLElement;
        pageNumber.textContent = `Page #${Winners.currentPage}`;
    }

    static cleanTable() {
        const table = document.querySelector('.containerTableHeader') as HTMLElement;
        const rows = table.querySelectorAll('.row');
        rows.forEach((row) => {
            row.remove();
        })
    }
}

export default Winners;
