"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiPurposeShip = void 0;
const Spacecraft_1 = require("./Spacecraft");
class MultiPurposeShip extends Spacecraft_1.Spacecraft {
    constructor(id, name, fuel, health, weaponPower, cargoCapacity) {
        super(id, name, fuel, health);
        this.weaponPower = weaponPower;
        this.cargoCapacity = cargoCapacity;
        this.currentCargo = 0;
    }
    //Getters
    getCargoCapacity() {
        return this.cargoCapacity;
    }
    getCurrentCargo() {
        return this.currentCargo;
    }
    //METHOD
    // CombatCapable
    attack(target) {
        if (this.isOperational() === false) {
            return 0;
        }
        const damage = this.weaponPower;
        target.takeDamage(damage);
        return damage;
    }
    // CargoCarrier
    loadCargo(amount) {
        if (amount + this.currentCargo <= this.cargoCapacity) {
            this.currentCargo = this.currentCargo + amount;
        }
        else {
            console.log(`Load capacity exceeded! Reduce the load.`);
        }
    }
    unloadCargo(amount) {
        if (amount <= this.currentCargo) {
            this.currentCargo = this.currentCargo - amount;
        }
        else {
            console.log(`All that remains is ${this.currentCargo} to unload the entire cargo.`);
        }
    }
    // Exploratory
    explore(location) {
        if (this.consumeFuel(15)) {
            return `The spacecraft ${this.getName()} began exploration in ${location}!`;
        }
        return `The spacecraft ${this.getName()} failed to explore ${location} due to insufficient fuel or being disabled!`;
    }
    collectData() {
        return `Scientific data successfully collected by the spacecraft!`;
    }
}
exports.MultiPurposeShip = MultiPurposeShip;
