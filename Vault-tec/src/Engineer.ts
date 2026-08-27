import { Resident } from "./Resident";

export class Engineer extends Resident {
    protected crea: string;

    public constructor(name: string, age: number, crea: string) {
        super(name, age);
        this.crea = crea;
    }

    public getCrea(): string {
        return this.crea;
    }

    //poliformismo
    public work(): void {
        console.log(`${this.name} is inspecting the Vault's infrastructure.`);
    }
}