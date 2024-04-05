import CreateElement from '../../../utils/createElement';

class ContainerWinnersHeader {
    private element: HTMLElement;

    constructor() {
        this.element = this.createContainerWinnersHeader();
    }

    public get() {
        return this.element;
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
}

export default ContainerWinnersHeader;
