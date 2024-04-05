import CreateElement from '../../../utils/createElement';

class TableHeader {
    private element: HTMLElement;

    constructor(setWinsSort: () => void, setTimeSort: () => void) {
        this.element = this.createTableHeader(setWinsSort, setTimeSort);
    }

    public get() {
        return this.element;
    }

    private createTableHeader(setWinsSort: () => void, setTimeSort: () => void) {
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
                callback: setWinsSort,
            },
        }).getElement();
        const bestTimeColumn = new CreateElement({
            tag: 'th',
            content: 'Best time',
            cssClasses: ['bestTimeColumn'],
            event: {
                type: 'click',
                callback: setTimeSort,
            },
        }).getElement();

        headerRow.append(numberColumn, carColumn, nameColumn, winsColumn, bestTimeColumn);
        containerTableHeader.append(headerRow);
        return containerTableHeader;
    }
}

export default TableHeader;
