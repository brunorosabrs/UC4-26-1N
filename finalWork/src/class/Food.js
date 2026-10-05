"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
class Food {
    constructor(name, category, availableQuantity, responsibleProducer) {
        this.name = name;
        this.category = category;
        if (availableQuantity < 0) {
            throw new Error("Initial available quantity cannot be negative.");
        }
        this.availableQuantity = availableQuantity;
        this.responsibleProducer = responsibleProducer;
    }
    getName() {
        return this.name;
    }
    getCategory() {
        return this.category;
    }
    getAvailableQuantity() {
        return this.availableQuantity;
    }
    getResponsibleProducer() {
        return this.responsibleProducer;
    }
    addQuantity(quantity) {
        if (quantity <= 0) {
            throw new Error("You must add an amount greater than 0!");
        }
        this.availableQuantity += quantity;
    }
    removeQuantity(quantity) {
        if (quantity <= 0) {
            throw new Error("You must remove an amount greater than 0!");
        }
        if (quantity > this.availableQuantity) {
            throw new Error("Insufficient available quantity in stock.");
        }
        this.availableQuantity -= quantity;
    }
    donate(quantity) {
        this.removeQuantity(quantity);
    }
}
exports.Food = Food;
