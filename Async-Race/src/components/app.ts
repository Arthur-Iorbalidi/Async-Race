import APIService from '../services/APIService';
import Router from '../services/router';
import Garage from './Garage/garage';
import Winners from './Winners/winners';

class App {
    private router = new Router();

    private apiService = new APIService();

    private entryPoint: HTMLElement = document.body;

    public start() {
        this.router.initRouter([
            {
              route: "/winners",
              callback: () => {
                this.clear();
                const winners = new Winners(this.apiService);
                winners.create();
              },
            },
            {
              route: "/garage",
              callback: () => {
                this.clear();
                const garage = new Garage(this.apiService);
                garage.create();
              },
              isDefaultRoute: true,
            },
        ]);
    }

    private clear() {
        this.entryPoint.innerHTML = "";
    }
}

export default App;
