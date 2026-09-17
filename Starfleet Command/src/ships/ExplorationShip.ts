import { Spacecraft } from "./Spacecraft";
import { Exploratory } from "../interfaces/Exploratory";

export class ExplorationShip extends Spacecraft implements Exploratory {
    public constructor(id: number, name: string, fuel: number, health: number) {
        super(id, name, fuel, health);
    }

    public explore(location: string): string {
        if (this.consumeFuel(15)) {
            return `The spacecraft ${this.getName()} began exploration in ${location}!`;
        }
        return `The spacecraft ${this.getName()} failed to explore ${location} due to insufficient fuel or being disabled!`;
    }
    
    public collectData(): string {
        return `Scientific data successfully collected by the spacecraft!`;
    }
}