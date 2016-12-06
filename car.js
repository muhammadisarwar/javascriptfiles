import {Auto} from 'https://github.com/muhammadisarwar/javascriptfiles/edit/es6-tutorial/auto.js'
export class Car extends Auto {
    constructor(data) {
        super(data);
        this.isElectric = data.isElectric;
        this.isHatchback = data.isHatchback;
    }

    getDetails() {
        return `${super.getDetails()} Electric: ${this.isElectric} Hatchback: ${this.isHatchback}`;
    }
}
