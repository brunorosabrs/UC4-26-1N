"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producer = void 0;
class Producer {
    constructor(name, cpf, producedQuantity) {
        if (producedQuantity < 0) {
            throw new Error("Produced quantity cannot be negative!");
        }
        this.name = name;
        this.cpf = cpf;
        this.producedQuantity = producedQuantity;
    }
    //Getters
    getName() {
        return this.name;
    }
    getCpf() {
        return this.cpf;
    }
    getProducedQuantity() {
        return this.producedQuantity;
    }
    //METHOD
    addQuantity(amount) {
        if (amount <= 0) {
            throw new Error("Amount must be greater than zero!");
        }
        this.producedQuantity = this.producedQuantity + amount;
    }
}
exports.Producer = Producer;
