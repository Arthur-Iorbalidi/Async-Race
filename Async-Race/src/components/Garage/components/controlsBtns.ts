import CreateElement from '../../../utils/createElement';

class ControlsBtns {
    private element: HTMLElement;

    constructor(
        raceCallback: (event: Event) => void,
        resetCallback: (event: Event) => void,
        generateCarsCallback: () => void,
    ) {
        this.element = this.controlsBtns(raceCallback, resetCallback, generateCarsCallback);
    }

    public get() {
        return this.element;
    }

    private controlsBtns(
        raceCallback: (event: Event) => void,
        resetCallback: (event: Event) => void,
        generateCarsCallback: () => void,
    ): HTMLElement {
        const wrapperBtns = new CreateElement({
            tag: 'div',
            cssClasses: ['wrapperBtns'],
        }).getElement();
        const btnRace = new CreateElement({
            tag: 'button',
            content: 'Race',
            cssClasses: ['btnRace', 'btn'],
            event: {
                type: 'click',
                callback: raceCallback,
            },
        }).getElement();
        const btnReset = new CreateElement({
            tag: 'button',
            content: 'Reset',
            cssClasses: ['btnReset', 'btn', 'inactive'],
            event: {
                type: 'click',
                callback: resetCallback,
            },
        }).getElement();
        const btnGenerate = new CreateElement({
            tag: 'button',
            content: 'Generate Cars',
            cssClasses: ['btnGenerate', 'btn'],
            event: {
                type: 'click',
                callback: generateCarsCallback,
            },
        }).getElement();
        wrapperBtns.append(btnRace, btnReset, btnGenerate);
        return wrapperBtns;
    }
}

export default ControlsBtns;
