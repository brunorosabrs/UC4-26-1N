"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spacecraft = void 0;
class Spacecraft {
    constructor(id, name, fuel, health) {
        this.id = id;
        this.name = name;
        this.fuel = fuel;
        if (this.fuel < 0) {
            this.fuel = 0;
        }
        this.health = health;
    }
    //Getters
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getFuel() {
        return this.fuel;
    }
    getHealth() {
        return this.health;
    }
    //Method
    consumeFuel(amount) {
        if (this.isOperational() && this.fuel >= amount) {
            this.fuel = this.fuel - amount;
            return true;
        }
        return false;
    }
    refuel(amount) {
        this.fuel = this.fuel + amount;
    }
    takeDamage(damage) {
        this.health = this.health - damage;
        if (this.health < 0) {
            this.health = 0;
        }
    }
    repair() {
        this.health = this.health + 20;
        if (this.health > 100) {
            this.health = 100;
        }
    }
    isOperational() {
        if (this.health > 0 && this.fuel > 0) {
            return true;
        }
        else {
            return false;
        }
    }
    showStatus() {
        console.log(`Ship: ${this.getName()} | Health: ${this.getHealth()} | Fuel: ${this.getFuel()}`);
    }
}
exports.Spacecraft = Spacecraft;
