class Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    displayInfo(): void {
        console.log("Brand: " + this.brand);
        console.log("Model: " + this.model);
        console.log("Year: " + this.year);
    }
}

let car1 = new Car("Toyota", "Fortuner", 2022);

car1.displayInfo();