import getCarsResponse from '../interfaces/getCarsResponse';
import carModels from '../assets/carModels';

function generateRandomColor(): string {
    const letters = '0123456789abcdef';
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generateRandomCar(): getCarsResponse {
    const randomBrand = carModels.brands[Math.floor(Math.random() * carModels.brands.length)];
    const randomModel = carModels.models[Math.floor(Math.random() * carModels.models.length)];
    const randomColor = generateRandomColor();
    return {
        name: `${randomBrand} ${randomModel}`,
        color: randomColor,
    };
}

function generateCarInstances(count: number): getCarsResponse[] {
    const carInstances: getCarsResponse[] = [];
    for (let i = 0; i < count; i += 1) {
        const carInstance = generateRandomCar();
        carInstances.push(carInstance);
    }
    return carInstances;
}

export default generateCarInstances;
