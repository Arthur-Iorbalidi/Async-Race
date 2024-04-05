import CreateElement from '../../../utils/createElement';

class BtnToWinners {
    private element: HTMLElement;

    constructor(toWinnerCallback: () => void) {
        this.element = this.createBtnToWinners(toWinnerCallback);
    }

    public get() {
        return this.element;
    }

    private createBtnToWinners(toWinnerCallback: () => void): HTMLElement {
        const btnToWinners = new CreateElement({
            tag: 'button',
            content: 'To Winners',
            cssClasses: ['btnToWinners'],
            event: {
                type: 'click',
                callback: toWinnerCallback,
            },
        }).getElement();
        return btnToWinners;
    }
}

export default BtnToWinners;
