import { Resident } from "./Resident";

export class Scientist extends Resident {
    protected researchArea: string;

    public constructor(name: string, age: number, researchArea: string) {
        super(name, age);
        this.researchArea = researchArea;
    }

    public getResearchArea(): string {
        return this.researchArea;
    }

    //poliformismo
    public work(): void {
        console.log(`${this.name} is conducting experiments in the laboratory.`);
    }
}