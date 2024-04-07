import CreateElement from '../../../utils/createElement';

class CreateCarBlock {
    private element: HTMLElement;

    constructor(createCarcallback: () => void) {
        this.element = this.createCarBlock(createCarcallback);
    }

    public get() {
        return this.element;
    }

    private createCarBlock(createCarcallback: () => void): HTMLElement {
        const wrapperCreateCar = new CreateElement({
            tag: 'div',
            cssClasses: ['wrapperCreateCar', 'wrapperOption'],
        }).getElement();
        const inputCarName = new CreateElement({
            tag: 'input',
            cssClasses: ['inputCarNameCreate', 'inputCarName'],
        }).getElement();
        const inputColorCreate = new CreateElement({
            tag: 'input',
            cssClasses: ['inputColorCreate', 'inputColor'],
            attributes: { type: 'color' },
        }).getElement();
        const btnCreate = new CreateElement({
            tag: 'button',
            content: 'Create',
            cssClasses: ['btnCreate', 'btn'],
            event: {
                type: 'click',
                callback: createCarcallback,
            },
        }).getElement();
        wrapperCreateCar.append(inputCarName, inputColorCreate, btnCreate);
        return wrapperCreateCar;
    }
}

export default CreateCarBlock;
