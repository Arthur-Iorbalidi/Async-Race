import Garage from './Garage/garage';
import Winners from './Winners/winners';

class App {
    public start() {
        Garage.create();
        Winners.create();
    }
}

export default App;
