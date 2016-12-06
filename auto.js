class Auto {
    constructor(data) {
        this.make = data.make;
        this.model = data.model;
        this.year = data.year;
        this.price = data.price;
    }

    getDetails() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}
