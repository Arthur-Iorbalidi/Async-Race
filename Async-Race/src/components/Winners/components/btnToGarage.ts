import CreateElement from '../../../utils/createElement';

class BtnToGarage {
    private element: HTMLElement;

    constructor(toGarageCallback: () => void) {
        this.element = this.createBtnToGarage(toGarageCallback);
    }

    public get() {
        return this.element;
    }

    private createBtnToGarage(toGarageCallback: () => void): HTMLElement {
        const btnToGarage = new CreateElement({
            tag: 'button',
            content: 'To Garage',
            cssClasses: ['btnToGarage'],
            event: {
                type: 'click',
                callback: toGarageCallback,
            },
        }).getElement();
        return btnToGarage;
    }
}

export default BtnToGarage;
