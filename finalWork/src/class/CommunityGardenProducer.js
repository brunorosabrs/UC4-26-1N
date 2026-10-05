"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunityGardenProducer = void 0;
const Producer_1 = require("./Producer");
class CommunityGardenProducer extends Producer_1.Producer {
    constructor(name, cpf, producedQuantity, numberOfVolunteers) {
        super(name, cpf, producedQuantity);
        this.numberOfVolunteers = numberOfVolunteers;
    }
    getNumberOfVolunteers() {
        return this.numberOfVolunteers;
    }
    //polymorphism
    present() {
        console.log(`[Community Garden Producer] Name: ${this.name} | CPF: ${this.cpf} | Produced: ${this.producedQuantity} kg | Volunteers: ${this.numberOfVolunteers}`);
    }
}
exports.CommunityGardenProducer = CommunityGardenProducer;
