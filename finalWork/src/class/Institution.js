"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Institution = void 0;
class Institution {
    constructor(name, address, peopleServed) {
        this.name = name;
        this.address = address;
        this.peopleServed = peopleServed;
        this.totalFoodReceived = 0;
    }
    getName() {
        return this.name;
    }
    getAddress() {
        return this.address;
    }
    getPeopleServed() {
        return this.peopleServed;
    }
    getTotalFoodReceived() {
        return this.totalFoodReceived;
    }
    // METHOD
    registerReceipt(food, quantity) {
        if (quantity <= 0) {
            throw new Error("Error! The quantity must be greater than 0!");
        }
        food.donate(quantity);
        this.totalFoodReceived = this.totalFoodReceived + quantity;
    }
}
exports.Institution = Institution;
