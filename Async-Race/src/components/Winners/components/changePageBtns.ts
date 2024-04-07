import CreateElement from '../../../utils/createElement';

class ChangePageBtns {
    private element: HTMLElement;

    constructor(nextPageCallback: () => void, prevPageCallback: () => void) {
        this.element = this.createChangePageBtns(nextPageCallback, prevPageCallback);
    }

    public get() {
        return this.element;
    }

    private createChangePageBtns(nextPageCallback: () => void, prevPageCallback: () => void): HTMLElement {
        const changePageBtns = new CreateElement({
            tag: 'div',
            cssClasses: ['changePageBtns'],
        }).getElement();
        const nextPage = new CreateElement({
            tag: 'button',
            content: 'Next',
            cssClasses: ['nextPageWinners', 'btn', 'inactive'],
            event: {
                type: 'click',
                callback: nextPageCallback,
            },
        }).getElement();
        const previousPage = new CreateElement({
            tag: 'button',
            content: 'Prev',
            cssClasses: ['previousPageWinners', 'btn', 'inactive'],
            event: {
                type: 'click',
                callback: prevPageCallback,
            },
        }).getElement();
        changePageBtns.append(previousPage, nextPage);
        return changePageBtns;
    }
}

export default ChangePageBtns;
