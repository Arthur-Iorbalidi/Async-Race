import CreateElement from '../../../utils/createElement';

class ContainerGarageHeader {
    private element: HTMLElement;

    constructor(currentPage: number) {
        this.element = this.createContainerGarageHeader(currentPage);
    }

    public get() {
        return this.element;
    }

    private createContainerGarageHeader(currentPage: number): HTMLElement {
        const containerGarageHeader = new CreateElement({
            tag: 'div',
            cssClasses: ['containerGarageHeader'],
        }).getElement();
        const headerGarage = new CreateElement({
            tag: 'h1',
            content: 'Garage ',
            cssClasses: ['headerGarage'],
        }).getElement();
        const countCar = new CreateElement({
            tag: 'span',
            content: '( 0 )',
            cssClasses: ['countCar'],
        }).getElement();
        const page = new CreateElement({
            tag: 'h2',
            content: `Page #${currentPage}`,
            cssClasses: ['pageNumber'],
        }).getElement();
        headerGarage.append(countCar);
        containerGarageHeader.append(headerGarage, page);
        return containerGarageHeader;
    }
}

export default ContainerGarageHeader;
