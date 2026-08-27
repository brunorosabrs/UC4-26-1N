"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Soldier = void 0;
const Resident_1 = require("./Resident");
class Soldier extends Resident_1.Resident {
    constructor(name, age, rank) {
        super(name, age);
        this.rank = rank;
    }
    getRank() {
        return this.rank;
    }
    //poliformismo
    work() {
        console.log(`${this.name} is providing security for the Vault.`);
    }
}
exports.Soldier = Soldier;
