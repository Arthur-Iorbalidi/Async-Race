import CreateElement from '../../../utils/createElement';

class BtnToGarage {
    private element: HTMLElement;

    constructor() {
        this.element = this.createBtnToGarage();
    }

    public get() {
        return this.element;
    }

    private createBtnToGarage(): HTMLElement {
        const btnToGarage = new CreateElement({
            tag: 'a',
            content: 'To Garage',
            cssClasses: ['btnToGarage'],
            attributes: { href: "/garage" },
        }).getElement();
        return btnToGarage;
    }
}

export default BtnToGarage;
