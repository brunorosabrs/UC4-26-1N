"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransportShip = void 0;
const Spacecraft_1 = require("./Spacecraft");
class TransportShip extends Spacecraft_1.Spacecraft {
    constructor(id, name, fuel, health, cargoCapacity) {
        super(id, name, fuel, health);
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
    getRepairCost() {
        return 500;
    }
    //Method
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
}
exports.TransportShip = TransportShip;
