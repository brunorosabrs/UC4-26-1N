import { Donatable } from "../interfaces/Donatable";

export class Food implements Donatable {
    private name: string;
    private category: number;
    private availableQuantity: number;
    private responsibleProducer: string;

    constructor(name: string, category: number, availableQuantity: number, responsibleProducer: string) {
        this.name = name;
        this.category = category;
        if (availableQuantity < 0) {
            throw new Error("Initial available quantity cannot be negative.");
        }
        this.availableQuantity = availableQuantity;
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

    // Methods
    public addQuantity(quantity: number): void {
        if (quantity <= 0) {
            throw new Error("You must add an amount greater than 0!");
        }
        this.availableQuantity += quantity;
    }

    public removeQuantity(quantity: number): void {
        if (quantity <= 0) {
            throw new Error("Error! You must remove an amount greater than 0!");
        }
        if (quantity > this.availableQuantity) {
            throw new Error("Error! Insufficient available quantity in stock.");
        }
        this.availableQuantity -= quantity;
    }

    public checkQuantity(): void {
        console.log(`The available quantity is ${this.availableQuantity}!`);
    }

    public donate(quantity: number): void {
        this.removeQuantity(quantity);
    }
}