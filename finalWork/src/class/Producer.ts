export abstract class Producer {
    protected name: string;
    protected cpf: string;
    protected producedQuantity: number;

    public constructor(name: string, cpf: string, producedQuantity: number) {
        if (producedQuantity < 0) {
            throw new Error("Produced quantity cannot be negative!");
        }
        this.name = name;
        this.cpf = cpf;
        this.producedQuantity = producedQuantity;

    }

    //Getters

    public getName(): string {
        return this.name;
    }
    public getCpf(): string {
        return this.cpf;
    }
    public getProducedQuantity(): number {
        return this.producedQuantity;
    }


    //METHOD
    public addQuantity(amount: number): void {

        if (amount <= 0) {
            throw new Error("Amount must be greater than zero!");
        }
        this.producedQuantity = this.producedQuantity + amount;
    }

    public abstract present(): void;
}