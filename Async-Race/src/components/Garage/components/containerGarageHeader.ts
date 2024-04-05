import CreateElement from '../../../utils/createElement';

class ContainerGarageHeader {
    private element: HTMLElement;

    constructor() {
        this.element = this.createContainerGarageHeader();
    }

    public get() {
        return this.element;
    }

    private createContainerGarageHeader(): HTMLElement {
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
            content: 'Page #1',
            cssClasses: ['pageNumber'],
        }).getElement();
        headerGarage.append(countCar);
        containerGarageHeader.append(headerGarage, page);
        return containerGarageHeader;
    }
}

export default ContainerGarageHeader;
