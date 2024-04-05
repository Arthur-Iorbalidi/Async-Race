import getCarsResponse from '../../interfaces/getCarsResponse';
import winnersResponse from '../../interfaces/winnersResponse';
import APIService from '../../services/APIService';
import CreateElement from '../../utils/createElement';
import BtnToGarage from './components/btnToGarage';
import ChangePageBtns from './components/changePageBtns';
import ContainerWinnersHeader from './components/containerWinnersHeader';
import CreateRow from './components/createRow';
import TableHeader from './components/tableHeader';
import './winners.scss';

class Winners {
    private APIService = new APIService();

    private winnersPerPage = 10;

    private currentPage = 1;

    private sort = 'time';

    private order = 'ASC';

    public create() {
        this.createView();
        this.getWinners();
    }

    private createView() {
        const winnersWrapper: HTMLElement = new CreateElement({
            tag: 'div',
            cssClasses: ['winnersWrapper', 'hidden'],
        }).getElement();

        const btnToGarage = new BtnToGarage(this.toGarage.bind(this)).get();
        const containerWinnersHeader = new ContainerWinnersHeader().get();
        const tableHeader = new TableHeader(this.setWinsSort.bind(this), this.setTimeSort.bind(this)).get();
        const changePageBtns = new ChangePageBtns(this.nextPage.bind(this), this.prevPage.bind(this)).get();

        winnersWrapper.append(btnToGarage, containerWinnersHeader, tableHeader, changePageBtns);
        document.body.append(winnersWrapper);
    }

    private remove() {
        const wrapper = document.querySelector('.winnersWrapper') as HTMLElement;
        wrapper.classList.add('hidden');
    }

    private toGarage() {
        this.remove();
        const wrapper = document.querySelector('.wrapperGarage') as HTMLElement;
        wrapper.classList.remove('hidden');
    }

    private async getWinners() {
        const response: Response = await this.APIService.getWinners(
            this.currentPage,
            this.winnersPerPage,
            this.sort,
            this.order,
        );
        const winners: winnersResponse[] = await response.json();
        const totalWinners = response.headers.get('X-Total-Count') as string;

        const requests = winners.map(async (winner) => {
            const winnerCar: getCarsResponse = await this.APIService.getCar(winner.id.toString());
            return { winnerCar, winner };
        });

        const winnersAndCars = await Promise.all(requests);

        winnersAndCars.forEach((winnerAndCar, index) => {
            const { winnerCar, winner } = winnerAndCar;
            const createRow = new CreateRow();
            createRow.createRow(
                index + 1 + (this.currentPage - 1) * 10,
                winnerCar.color,
                winnerCar.name,
                winner.wins,
                winner.time,
            );
        });

        this.nextAndPrevVisability(totalWinners);
        this.setWinnersCount(totalWinners);
    }

    private nextAndPrevVisability(totalWinners: string) {
        if (parseInt(totalWinners, 10) > this.currentPage * this.winnersPerPage) {
            document.querySelector('.nextPageWinners')?.classList.remove('inactive');
        } else {
            document.querySelector('.nextPageWinners')?.classList.add('inactive');
        }
        if (this.currentPage > 1) {
            document.querySelector('.previousPageWinners')?.classList.remove('inactive');
        } else {
            document.querySelector('.previousPageWinners')?.classList.add('inactive');
        }
    }

    private setTimeSort() {
        this.sort = 'time';
        this.changeOrder();
        this.cleanTable();
        this.getWinners();
    }

    private setWinsSort() {
        this.sort = 'wins';
        this.changeOrder();
        this.cleanTable();
        this.getWinners();
    }

    private changeOrder() {
        if (this.order === 'ASC') {
            this.order = 'DESC';
        } else {
            this.order = 'ASC';
        }
    }

    private setWinnersCount(totalWinners: string) {
        const countCar = document.querySelector('.countWinners') as HTMLElement;
        countCar.textContent = `( ${totalWinners} )`;
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
        this.cleanTable();
        this.getWinners();
        this.setCurrentPage();
    }

    private setCurrentPage() {
        const pageNumber = document.querySelector('.pageNumberWinners') as HTMLElement;
        pageNumber.textContent = `Page #${this.currentPage}`;
    }

    private cleanTable() {
        const table = document.querySelector('.containerTableHeader') as HTMLElement;
        const rows = table.querySelectorAll('.row');
        rows.forEach((row) => {
            row.remove();
        });
    }

    static toWinners() {
        const winners = new Winners();
        winners.cleanTable();
        winners.getWinners();
    }
}

export default Winners;
