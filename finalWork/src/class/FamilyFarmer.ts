import { Producer } from "./Producer";

export class FamilyFarmer extends Producer {
    private propertySize: number;

    constructor(name: string, cpf: string, producedQuantity: number, propertySize: number) {
        super(name, cpf, producedQuantity);
        this.propertySize = propertySize;
    }

    public getPropertySize(): number {
        return this.propertySize;
    }


    // polymorphism
    public present(): void {
        console.log(`[Family Farmer] Name: ${this.name} | CPF: ${this.cpf} | Produced: ${this.producedQuantity} kg | Property Size: ${this.propertySize} hectares`);
    }
}