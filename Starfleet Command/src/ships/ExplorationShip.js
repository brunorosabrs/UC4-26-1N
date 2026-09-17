"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExplorationShip = void 0;
const Spacecraft_1 = require("./Spacecraft");
class ExplorationShip extends Spacecraft_1.Spacecraft {
    constructor(id, name, fuel, health) {
        super(id, name, fuel, health);
    }
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
exports.ExplorationShip = ExplorationShip;
