"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fleet = void 0;
class Fleet {
    constructor() {
        this.ships = [];
    }
    addShip(ship) {
        this.ships.push(ship);
    }
    removeShip(id) {
        for (let i = 0; i < this.ships.length; i++) {
            if (this.ships[i].getId() === id) {
                this.ships.splice(i, 1);
                return;
            }
        }
    }
    findShip(id) {
        for (let i = 0; i < this.ships.length; i++) {
            if (this.ships[i].getId() === id) {
                return this.ships[i];
            }
        }
    }
    showFleet() {
        for (const ship of this.ships) {
            ship.showStatus();
        }
    }
}
exports.Fleet = Fleet;
