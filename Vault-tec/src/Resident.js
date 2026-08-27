"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resident = void 0;
class Resident {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    //method
    work() {
        console.log(`${this.name} is working...`);
    }
}
exports.Resident = Resident;
