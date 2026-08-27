"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scientist = void 0;
const Resident_1 = require("./Resident");
class Scientist extends Resident_1.Resident {
    constructor(name, age, researchArea) {
        super(name, age);
        this.researchArea = researchArea;
    }
    getResearchArea() {
        return this.researchArea;
    }
    //poliformismo
    work() {
        console.log(`${this.name} is conducting experiments in the laboratory.`);
    }
}
exports.Scientist = Scientist;
