import { Donatable } from "../interfaces/Donatable";

export class Food implements Donatable {
    private name: string;
    private category: string;
    private availableQuantity: number;
    private responsibleProducer: string;

    constructor(name: string, category: string, availableQuantity: number, responsibleProducer: string) {
        this.name = name;
        this.category = category;
        if (availableQuantity < 0) {
            throw new Error("Initial available quantity cannot be negative.");
        }
        this.availableQuantity = availableQuantity;
        this.responsibleProducer = responsibleProducer;
    }

    public getName(): string {
        return this.name;
    }

    public getCategory(): string {
        return this.category;
    }

    public getAvailableQuantity(): number {
        return this.availableQuantity;
    }

    public getResponsibleProducer(): string {
        return this.responsibleProducer;
    }

    public addQuantity(quantity: number): void {
        if (quantity <= 0) {
            throw new Error("You must add an amount greater than 0!");
        }

        this.availableQuantity += quantity;
    }

    public removeQuantity(quantity: number): void {
        if (quantity <= 0) {
            throw new Error("You must remove an amount greater than 0!");
        }

        if (quantity > this.availableQuantity) {
            throw new Error("Insufficient available quantity in stock.");
        }

        this.availableQuantity -= quantity;
    }

    public donate(quantity: number): void {
        this.removeQuantity(quantity);
    }
}