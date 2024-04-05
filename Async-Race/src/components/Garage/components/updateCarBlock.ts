import CreateElement from '../../../utils/createElement';

class UpdateCarBlock {
    private element: HTMLElement;

    constructor(updateCarcallback: (event: Event) => void) {
        this.element = this.updateCarBlock(updateCarcallback);
    }

    public get() {
        return this.element;
    }

    private updateCarBlock(updateCarcallback: (event: Event) => void): HTMLElement {
        const wrapperUpdateCar = new CreateElement({
            tag: 'div',
            cssClasses: ['wrapperUpdateCar', 'wrapperOption', 'inactive'],
        }).getElement();
        const inputCarNameUpdate = new CreateElement({
            tag: 'input',
            cssClasses: ['inputCarNameUpdate', 'inputCarName'],
        }).getElement();
        const inputColorUpdate = new CreateElement({
            tag: 'input',
            cssClasses: ['inputColorUpdate', 'inputColor'],
            attributes: { type: 'color' },
        }).getElement();
        const btnUpdate = new CreateElement({
            tag: 'button',
            content: 'Update',
            cssClasses: ['btnUpdate', 'btn'],
            event: {
                type: 'click',
                callback: updateCarcallback,
            },
        }).getElement();
        wrapperUpdateCar.append(inputCarNameUpdate, inputColorUpdate, btnUpdate);
        return wrapperUpdateCar;
    }
}

export default UpdateCarBlock;
