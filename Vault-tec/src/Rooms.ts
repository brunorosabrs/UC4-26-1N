import { Resident } from "./Resident";

export class Rooms {
    protected name: string;
    protected capacity: number;
    protected residents: Resident[];

    public constructor(name: string, capacity: number) {
        this.name = name;
        this.capacity = capacity;
        this.residents = [];
    }

    public getName(): string {
        return this.name;
    }

    public getCapacity(): number {
        return this.capacity;
    }

    public addResident(resident: Resident): void {
        if (this.residents.length < this.capacity) {
            this.residents.push(resident);
        } else {
            console.log(`The room is full. No more residents can be added.`);
        }

    }

    public getResidents(): Resident[] {
        return this.residents;
    }


    public removeResident(resident: Resident): void {
        const resi = this.residents.indexOf(resident);
        if (resi !== -1) {
            this.residents.splice(resi, 1);
        }
    }

}

