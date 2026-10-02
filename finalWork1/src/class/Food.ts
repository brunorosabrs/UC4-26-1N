import { Donatable } from "../interfaces/Donatable";

export class Food implements Donatable {
    private name: string;
    private category: number;
    private availableQuantity: number;
    private responsibleProducer: string;

    constructor(name: string, category: number, availableQuantity: number, responsibleProducer: string) {
        this.name = name;
        this.category = category;
        this.availableQuantity = availableQuantity;
        if (this.availableQuantity < 0) {
            this.availableQuantity = 0;
        }
        this.responsibleProducer = responsibleProducer;
    }

    // Getters
    public getName(): string {
        return this.name;
    }
    public getCategory(): number {
        return this.category;
    }
    public getAvailableQuantity(): number {
        return this.availableQuantity;
    }
    public getResponsibleProducer(): string {
        return this.responsibleProducer;
    }


    //METHOD 
    public addQuantity(quantity: number): void {
        if (quantity <= 0) {
        throw new Error ("You must add an amount greater than 0! ")
        }
        this.availableQuantity = this.availableQuantity + quantity
    }





}