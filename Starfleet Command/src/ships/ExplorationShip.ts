import { Spacecraft } from "./Spacecraft";
import { Exploratory } from "../interfaces/Exploratory";

export class ExplorationShip extends Spacecraft implements Exploratory {
    public constructor(id: number, name: string, fuel: number, health: number) {
        super(id, name, fuel, health);
    }

    public explore(location: string): string {
        this.fuel = this.fuel - 15;
        return `The spacecraft ${this.name} began exploration in ${location}!`;
       
    }
    public collectData(): string {
        return `Scientific data successfully collected by the spacecraft!`;
    }
}