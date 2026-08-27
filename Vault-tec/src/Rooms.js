"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rooms = void 0;
class Rooms {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.residents = [];
    }
    getName() {
        return this.name;
    }
    getCapacity() {
        return this.capacity;
    }
    addResident(resident) {
        if (this.residents.length < this.capacity) {
            this.residents.push(resident);
        }
        else {
            console.log(`The room is full. No more residents can be added.`);
        }
    }
    getResidents() {
        return this.residents;
    }
    removeResident(resident) {
        const resi = this.residents.indexOf(resident);
        if (resi !== -1) {
            this.residents.splice(resi, 1);
        }
    }
}
exports.Rooms = Rooms;
