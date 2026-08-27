import { Resident } from "./Resident";

export class Doctor extends Resident{
    protected crm: string;

    public constructor(name: string, age: number, crm: string){
        super(name, age);
        this.crm = crm;
    }

    public getCrm(): string {
        return this.crm;
    }
    

    //poliformismo
    public work(): void {
        console.log(`Dr. ${this.name} began consultations at the hospital.`);
    }
}