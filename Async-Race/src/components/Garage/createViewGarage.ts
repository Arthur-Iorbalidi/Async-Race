import CreateElement from '../../utils/createElement';
import createFlagSvg from './createFlagSvg';
import createCarSvg from './createSvg';
import Garage from './garage';

class CreateViewGarage {
    public create() {
        const garageWrapper: HTMLElement = new CreateElement({
            tag: 'div',
            cssClasses: ['wrapperGarage'],
            event: {
                type: 'click',
                callback: Garage.removeWinnerMessage,
            }
        }).getElement();
        const btnToWinners = new CreateElement({
            tag: 'button',
            content: 'To Winners',
            cssClasses: ['btnToWinners'],
            event: {
                type: 'click',
                callback: Garage.toWinners,
            }
        }).getElement();
        const wrapperControl = new CreateElement({
            tag: 'div',
            cssClasses: ['wrapperControl'],
        }).getElement();
        const containerGarage = new CreateElement({
            tag: 'div',
            cssClasses: ['containerGarage'],
        }).getElement();
        wrapperControl.append(this.createCarBlock(), this.updateCarBlock(), this.controlsBtns());
        garageWrapper.append(btnToWinners, wrapperControl, this.createContainerGarageHeader(), containerGarage, this.createChangePageBtns());
        document.body.append(garageWrapper);
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

    private createCarBlock(): HTMLElement {
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
                callback: Garage.createCarCallback,
            },
        }).getElement();
        wrapperCreateCar.append(inputCarName, inputColorCreate, btnCreate);
        return wrapperCreateCar;
    }

    private updateCarBlock(): HTMLElement {
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
                callback: Garage.updateCarCallback,
            },
        }).getElement();
        wrapperUpdateCar.append(inputCarNameUpdate, inputColorUpdate, btnUpdate);
        return wrapperUpdateCar;
    }

    private controlsBtns(): HTMLElement {
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
                callback: Garage.race,
            }
        }).getElement();
        const btnReset = new CreateElement({
            tag: 'button',
            content: 'Reset',
            cssClasses: ['btnReset', 'btn', 'inactive'],
            event: {
                type: 'click',
                callback: Garage.reset,
            }
        }).getElement();
        const btnGenerate = new CreateElement({
            tag: 'button',
            content: 'Generate Cars',
            cssClasses: ['btnGenerate', 'btn'],
            event: {
                type: 'click',
                callback: Garage.generateCars,
            },
        }).getElement();
        wrapperBtns.append(btnRace, btnReset, btnGenerate);
        return wrapperBtns;
    }

    static createCar(carName: string, color: string, id: number): void {
        const carBlock = new CreateElement({
            tag: 'div',
            cssClasses: ['carBlock', `${id}`],
        }).getElement();
        carBlock.append(this.createHeaderCar(carName), this.createRoad(color));
        document.querySelector('.containerGarage')?.append(carBlock);
    }

    static createHeaderCar(carName: string): HTMLElement {
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
                callback: Garage.selectCar,
            },
        }).getElement();
        const btnRemove = new CreateElement({
            tag: 'button',
            content: 'Remove',
            cssClasses: ['btnRemove', 'btn'],
            event: {
                type: 'click',
                callback: Garage.deleteCarCallback,
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

    static createStartAndStopBtns(): HTMLElement {
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
                callback: Garage.startCarCallback,
            },
        }).getElement();
        const btnStop = new CreateElement({
            tag: 'button',
            content: 'B',
            cssClasses: ['btnStop', 'btn', 'inactive'],
            event: {
                type: 'click',
                callback: Garage.stopCarCallback
            }
        }).getElement();
        startAndStop.append(btnStart, btnStop);
        return startAndStop;
    }

    static createRoad(color: string): HTMLElement {
        const road = new CreateElement({
            tag: 'div',
            cssClasses: ['road'],
        }).getElement();
        road.append(this.createStartAndStopBtns(), this.createCarIcon(color), this.createFlagIcon());
        return road;
    }

    static createCarIcon(color: string): HTMLElement {
        const carIconInner = createCarSvg(color);
        return new CreateElement({
            tag: 'div',
            cssClasses: ['carIcon'],
            innerHTML: carIconInner,
        }).getElement();
    }

    static createFlagIcon(): HTMLElement {
        const flagIconInner = createFlagSvg();
        return new CreateElement({
            tag: 'div',
            cssClasses: ['flagIcon'],
            innerHTML: flagIconInner,
        }).getElement();
    }

    public createChangePageBtns(): HTMLElement {
        const changePageBtns = new CreateElement({
            tag: 'div',
            cssClasses: ['changePageBtns'],
        }).getElement();
        const nextPage = new CreateElement({
            tag: 'button',
            content: 'Next',
            cssClasses: ['nextPage', 'btn', 'inactive'],
            event: {
                type: 'click',
                callback: Garage.nextPage,
            },
        }).getElement();
        const previousPage = new CreateElement({
            tag: 'button',
            content: 'Prev',
            cssClasses: ['previousPage', 'btn', 'inactive'],
            event: {
                type: 'click',
                callback: Garage.prevPage,
            },
        }).getElement();
        changePageBtns.append(previousPage, nextPage);
        return changePageBtns;
    }

    static createWinnerMessage(winner: string) {
        const winnerMessage = new CreateElement({
            tag: 'div',
            content: `${winner} went first`,
            cssClasses: ['winnerMessage'],
        }).getElement();

        document.querySelector('.wrapperGarage')?.append(winnerMessage);
    }
}

export default CreateViewGarage;
