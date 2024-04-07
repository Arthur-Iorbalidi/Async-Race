import CreateElement from '../../../utils/createElement';

class WinnerMessage {
    public createWinnerMessage(winner: string) {
        const winnerMessage = new CreateElement({
            tag: 'div',
            content: `${winner} went first`,
            cssClasses: ['winnerMessage'],
        }).getElement();

        document.querySelector('.wrapperGarage')?.append(winnerMessage);
    }
}

export default WinnerMessage;
