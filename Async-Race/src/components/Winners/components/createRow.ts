import CreateElement from '../../../utils/createElement';
import createCarSvg from '../../Garage/createSvg';

class CreateRow {
    public createRow(number: number, color: string, name: string, winsCount: number, bestTimeData: number) {
        const row = new CreateElement({
            tag: 'tr',
            cssClasses: ['row'],
        }).getElement();
        const numberColumn = new CreateElement({
            tag: 'th',
            content: `${number}`,
            cssClasses: ['numberWinner'],
        }).getElement();
        const carIconTable = new CreateElement({
            tag: 'th',
            innerHTML: createCarSvg(color),
            cssClasses: ['carIconTable'],
        }).getElement();
        const nameCar = new CreateElement({
            tag: 'th',
            content: `${name}`,
            cssClasses: ['nameCarWinner'],
        }).getElement();
        const wins = new CreateElement({
            tag: 'th',
            content: `${winsCount}`,
            cssClasses: ['wins'],
        }).getElement();
        const bestTime = new CreateElement({
            tag: 'th',
            content: `${bestTimeData}`,
            cssClasses: ['bestTime'],
        }).getElement();

        row.append(numberColumn, carIconTable, nameCar, wins, bestTime);
        document.querySelector('.containerTableHeader')?.append(row);
    }
}

export default CreateRow;
