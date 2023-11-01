interface Vehicle {
    year: number;
    model: string;
    color: string;
}

class Car implements Vehicle {
    year: number;
    model: string;
    color: string;
    numberOfWheels: number;
    numberOfDoors: number;

    constructor(year: number, model: string, color: string, numberOfWheels: number, numberOfDoors: number) {
        this.year = year;
        this.model = model;
        this.color = color;
        this.numberOfWheels = numberOfWheels;
        this.numberOfDoors = numberOfDoors;
    }
}

class Motorcycle implements Vehicle {
    year: number;
    model: string;
    color: string;
    numberOfWheels: number;
    origin: string;

    constructor(year: number, model: string, color: string, numberOfWheels: number, origin: string) {
        this.year = year;
        this.model = model;
        this.color = color;
        this.numberOfWheels = numberOfWheels;
        this.origin = origin;
    }
}
