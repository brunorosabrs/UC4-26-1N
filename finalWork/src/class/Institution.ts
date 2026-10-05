import { Food } from "./Food";

export class Institution {
    private name: string;
    private address: string;
    private peopleServed: number;
    private totalFoodReceived: number;

    public constructor(name: string, address: string, peopleServed: number) {
        this.name = name;
        this.address = address;
        this.peopleServed = peopleServed;
        this.totalFoodReceived = 0;
    }

    public getName(): string {
        return this.name;
    }

    public getAddress(): string {
        return this.address;
    }

    public getPeopleServed(): number {
        return this.peopleServed;
    }

    public getTotalFoodReceived(): number {
        return this.totalFoodReceived;
    }

    // METHOD
    public registerReceipt(food: Food, quantity: number): void {
        if (quantity <= 0) {
            throw new Error("Error! The quantity must be greater than 0!");
        }
        food.donate(quantity);
        this.totalFoodReceived = this.totalFoodReceived + quantity;
    }
}