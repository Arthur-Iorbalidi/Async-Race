import CreateElement from '../../../utils/createElement';
import createFlagSvg from '../createFlagSvg';
import createCarSvg from '../createSvg';

class CreateCar {
    public createCar(
        carName: string,
        color: string,
        id: number,
        selectCar: (event: Event) => void,
        deleteCar: (event: Event) => void,
        startCar: (event: Event) => void,
        stopCar: (event: Event) => void,
    ): void {
        const carBlock = new CreateElement({
            tag: 'div',
            cssClasses: ['carBlock', `${id}`],
        }).getElement();
        carBlock.append(this.createHeaderCar(carName, selectCar, deleteCar), this.createRoad(color, startCar, stopCar));
        document.querySelector('.containerGarage')?.append(carBlock);
    }

    private createHeaderCar(
        carName: string,
        selectCar: (event: Event) => void,
        deleteCar: (event: Event) => void,
    ): HTMLElement {
        const wrapperBtnsCar = new CreateElement({
            tag: 'div',
            cssClasses: ['wrapperBtnsCar'],
        }).getElement();
        const btnSelect = new CreateElement({
            tag: 'button',
            content: 'Select',
            cssClasses: ['btnSelect', 'btn'],
            event: {
                type: 'click',
                callback: selectCar,
            },
        }).getElement();
        const btnRemove = new CreateElement({
            tag: 'button',
            content: 'Remove',
            cssClasses: ['btnRemove', 'btn'],
            event: {
                type: 'click',
                callback: deleteCar,
            },
        }).getElement();
        const carNameSpan = new CreateElement({
            tag: 'span',
            content: carName,
            cssClasses: ['carNameSpan'],
        }).getElement();
        wrapperBtnsCar.append(btnSelect, btnRemove, carNameSpan);
        return wrapperBtnsCar;
    }

    private createRoad(color: string, startCar: (event: Event) => void, stopCar: (event: Event) => void): HTMLElement {
        const road = new CreateElement({
            tag: 'div',
            cssClasses: ['road'],
        }).getElement();
        road.append(this.createStartAndStopBtns(startCar, stopCar), this.createCarIcon(color), this.createFlagIcon());
        return road;
    }

    private createStartAndStopBtns(startCar: (event: Event) => void, stopCar: (event: Event) => void): HTMLElement {
        const startAndStop = new CreateElement({
            tag: 'div',
            cssClasses: ['startAndStop'],
        }).getElement();
        const btnStart = new CreateElement({
            tag: 'button',
            content: 'A',
            cssClasses: ['btnStart', 'btn'],
            event: {
                type: 'click',
                callback: startCar,
            },
        }).getElement();
        const btnStop = new CreateElement({
            tag: 'button',
            content: 'B',
            cssClasses: ['btnStop', 'btn', 'inactive'],
            event: {
                type: 'click',
                callback: stopCar,
            },
        }).getElement();
        startAndStop.append(btnStart, btnStop);
        return startAndStop;
    }

    private createCarIcon(color: string): HTMLElement {
        const carIconInner = createCarSvg(color);
        return new CreateElement({
            tag: 'div',
            cssClasses: ['carIcon'],
            innerHTML: carIconInner,
        }).getElement();
    }

    private createFlagIcon(): HTMLElement {
        const flagIconInner = createFlagSvg();
        return new CreateElement({
            tag: 'div',
            cssClasses: ['flagIcon'],
            innerHTML: flagIconInner,
        }).getElement();
    }
}

export default CreateCar;
