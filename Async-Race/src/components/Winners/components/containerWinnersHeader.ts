import CreateElement from '../../../utils/createElement';

class ContainerWinnersHeader {
    private element: HTMLElement;

    constructor(currentPage: number) {
        this.element = this.createContainerWinnersHeader(currentPage);
    }

    public get() {
        return this.element;
    }

    private createContainerWinnersHeader(currentPage: number): HTMLElement {
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
            content: `Page #${currentPage}`,
            cssClasses: ['pageNumberWinners'],
        }).getElement();

        headerWinners.append(countWinners);
        containerWinnersHeader.append(headerWinners, page);
        return containerWinnersHeader;
    }
}

export default ContainerWinnersHeader;
