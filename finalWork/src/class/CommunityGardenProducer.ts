import { Producer } from "./Producer";

export class CommunityGardenProducer extends Producer {
    private numberOfVolunteers: number;

    constructor(name: string, cpf: string, producedQuantity: number, numberOfVolunteers: number) {
        super(name, cpf, producedQuantity);
        this.numberOfVolunteers = numberOfVolunteers;
    }

    public getNumberOfVolunteers(): number {
        return this.numberOfVolunteers;
    }

    //polymorphism
    public present(): void {
        console.log(`[Community Garden Producer] Name: ${this.name} | CPF: ${this.cpf} | Produced: ${this.producedQuantity} kg | Volunteers: ${this.numberOfVolunteers}`);
    }
}