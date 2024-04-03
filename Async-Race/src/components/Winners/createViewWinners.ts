import CreateElement from "../../utils/createElement";
import createCarSvg from "../Garage/createSvg";
import Winners from "./winners";

class CreateViewWinners {
    public create() {
        const winnersWrapper: HTMLElement = new CreateElement({
            tag: 'div',
            cssClasses: ['winnersWrapper', 'hidden'],
        }).getElement();
        const btnToGarage = new CreateElement({
            tag: 'button',
            content: 'To Garage',
            cssClasses: ['btnToGarage'],
            event: {
                type: 'click',
                callback: Winners.toGarage,
            }
        }).getElement();

        winnersWrapper.append(btnToGarage, this.createContainerWinnersHeader(), this.createTableHeader(), this.createChangePageBtns());
        document.body.append(winnersWrapper);
    }

    private createContainerWinnersHeader(): HTMLElement {
        const containerWinnersHeader = new CreateElement({
            tag: 'div',
            cssClasses: ['containerWinnersHeader'],
        }).getElement();
        const headerWinners = new CreateElement({
            tag: 'h1',
            content: 'Winners ',
            cssClasses: ['headerWinners'],
        }).getElement();
        const countWinners = new CreateElement({
            tag: 'span',
            content: '( 0 )',
            cssClasses: ['countWinners'],
        }).getElement();
        const page = new CreateElement({
            tag: 'h2',
            content: 'Page #1',
            cssClasses: ['pageNumberWinners'],
        }).getElement();

        headerWinners.append(countWinners);
        containerWinnersHeader.append(headerWinners, page);
        return containerWinnersHeader;
    }

    private createTableHeader() {
        const containerTableHeader = new CreateElement({
            tag: 'table',
            cssClasses: ['containerTableHeader'],
        }).getElement();
        const headerRow = new CreateElement({
            tag: 'tr',
            cssClasses: ['headerRow'],
        }).getElement();
        const numberColumn = new CreateElement({
            tag: 'th',
            content: 'Number',
            cssClasses: ['numberColumn'],
        }).getElement();
        const carColumn = new CreateElement({
            tag: 'th',
            content: 'Car',
            cssClasses: ['numberColumn'],
        }).getElement();
        const nameColumn = new CreateElement({
            tag: 'th',
            content: 'Name',
            cssClasses: ['nameColumn'],
        }).getElement();
        const winsColumn = new CreateElement({
            tag: 'th',
            content: 'Wins',
            cssClasses: ['winsColumn'],
            event: {
                type: 'click',
                callback: Winners.setWinsSort,
            }
        }).getElement();
        const bestTimeColumn = new CreateElement({
            tag: 'th',
            content: 'Best time',
            cssClasses: ['bestTimeColumn'],
            event: {
                type: 'click',
                callback: Winners.setTimeSort,
            }
        }).getElement();

        headerRow.append(numberColumn, carColumn, nameColumn, winsColumn, bestTimeColumn);
        containerTableHeader.append(headerRow);
        return containerTableHeader;
    }

    static createRow(number: number, color: string, name: string, winsCount: number, bestTimeData: number) {
        const row = new CreateElement({
            tag: 'tr',
            cssClasses: ['row'],
        }).getElement();
        const numberColumn = new CreateElement({
            tag: 'th',
            content: `${number}`,
            cssClasses: ['numberWinner'],
        }).getElement();
        const carIconTable = new CreateElement({
            tag: 'th',
            innerHTML: createCarSvg(color),
            cssClasses: ['carIconTable'],
        }).getElement();
        const nameCar = new CreateElement({
            tag: 'th',
            content: `${name}`,
            cssClasses: ['nameCarWinner'],
        }).getElement();
        const wins = new CreateElement({
            tag: 'th',
            content: `${winsCount}`,
            cssClasses: ['wins'],
        }).getElement();
        const bestTime = new CreateElement({
            tag: 'th',
            content: `${bestTimeData}`,
            cssClasses: ['bestTime'],
        }).getElement();

        row.append(numberColumn, carIconTable, nameCar, wins, bestTime);
        document.querySelector('.containerTableHeader')?.append(row);
    }

    public createChangePageBtns(): HTMLElement {
        const changePageBtns = new CreateElement({
            tag: 'div',
            cssClasses: ['changePageBtns'],
        }).getElement();
        const nextPage = new CreateElement({
            tag: 'button',
            content: 'Next',
            cssClasses: ['nextPageWinners', 'btn', 'inactive'],
            event: {
                type: 'click',
                callback: Winners.nextPage,
            },
        }).getElement();
        const previousPage = new CreateElement({
            tag: 'button',
            content: 'Prev',
            cssClasses: ['previousPageWinners', 'btn', 'inactive'],
            event: {
                type: 'click',
                callback: Winners.prevPage,
            },
        }).getElement();
        changePageBtns.append(previousPage, nextPage);
        return changePageBtns;
    }
}

export default CreateViewWinners;