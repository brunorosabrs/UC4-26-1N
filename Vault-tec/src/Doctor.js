"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Doctor = void 0;
const Resident_1 = require("./Resident");
class Doctor extends Resident_1.Resident {
    constructor(name, age, crm) {
        super(name, age);
        this.crm = crm;
    }
    getCrm() {
        return this.crm;
    }
    //poliformismo
    work() {
        console.log(`Dr. ${this.name} began consultations at the hospital.`);
    }
}
exports.Doctor = Doctor;
