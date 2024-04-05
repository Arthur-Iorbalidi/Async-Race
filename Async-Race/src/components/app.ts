import Garage from './Garage/garage';
import Winners from './Winners/winners';

class App {
    public start() {
        const garage = new Garage();
        garage.create();
        const winners = new Winners();
        winners.create();
    }
}

export default App;
