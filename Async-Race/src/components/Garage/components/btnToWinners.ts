import CreateElement from '../../../utils/createElement';

class BtnToWinners {
    private element: HTMLElement;

    constructor() {
        this.element = this.createBtnToWinners();
    }

    public get() {
        return this.element;
    }

    private createBtnToWinners(): HTMLElement {
        const btnToWinners = new CreateElement({
            tag: 'a',
            content: 'To Winners',
            cssClasses: ['btnToWinners'],
            attributes: { href: "/winners" },
        }).getElement();
        return btnToWinners;
    }
}

export default BtnToWinners;
