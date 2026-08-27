import { Resident } from "./Resident";

export class Soldier extends Resident {
    protected rank: string;

    public constructor(name: string, age: number, rank: string) {
        super(name, age);
        this.rank = rank;
    }

    public getRank(): string {
        return this.rank;
    }

    //poliformismo
    public work(): void {
        console.log(`${this.name} is providing security for the Vault.`);
    }
}