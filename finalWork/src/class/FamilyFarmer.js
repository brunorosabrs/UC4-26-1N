"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyFarmer = void 0;
const Producer_1 = require("./Producer");
class FamilyFarmer extends Producer_1.Producer {
    constructor(name, cpf, producedQuantity, propertySize) {
        super(name, cpf, producedQuantity);
        this.propertySize = propertySize;
    }
    getPropertySize() {
        return this.propertySize;
    }
    // polymorphism
    present() {
        console.log(`[Family Farmer] Name: ${this.name} | CPF: ${this.cpf} | Produced: ${this.producedQuantity} kg | Property Size: ${this.propertySize} hectares`);
    }
}
exports.FamilyFarmer = FamilyFarmer;
