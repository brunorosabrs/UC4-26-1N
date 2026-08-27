"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engineer = void 0;
const Resident_1 = require("./Resident");
class Engineer extends Resident_1.Resident {
    constructor(name, age, crea) {
        super(name, age);
        this.crea = crea;
    }
    getCrea() {
        return this.crea;
    }
    //poliformismo
    work() {
        console.log(`${this.name} is inspecting the Vault's infrastructure.`);
    }
}
exports.Engineer = Engineer;
