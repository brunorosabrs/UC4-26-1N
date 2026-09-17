"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fighter = void 0;
const Spacecraft_1 = require("./Spacecraft");
class Fighter extends Spacecraft_1.Spacecraft {
    constructor(weaponPower, id, name, fuel, health) {
        super(id, name, fuel, health);
        this.weaponPower = weaponPower;
    }
    attack(target) {
        if (this.isOperational() === false) {
            return 0;
        }
        const damage = this.weaponPower;
        target.takeDamage(damage);
        return damage;
    }
    getRepairCost() {
        return 500;
    }
}
exports.Fighter = Fighter;
