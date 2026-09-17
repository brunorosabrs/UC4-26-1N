import { Spacecraft } from "./Spacecraft";
import { CargoCarrier } from "../interfaces/CargoCarrier";
import { Repairable } from "../interfaces/Repairable";

export class TransportShip extends Spacecraft implements CargoCarrier, Repairable {
    private cargoCapacity: number;
    private currentCargo: number;

    public constructor(id: number, name: string, fuel: number, health: number, cargoCapacity: number,) {
        super(id, name, fuel, health);
        this.cargoCapacity = cargoCapacity;
        this.currentCargo = 0;
    }

    //Getters
    public getCargoCapacity(): number {
        return this.cargoCapacity;
    }

    public getCurrentCargo(): number {
        return this.currentCargo;
    }

    public getRepairCost(): number {
        return 500;
    }

    //Method
    public loadCargo(amount: number): void {
        if (amount + this.currentCargo <= this.cargoCapacity) {
            this.currentCargo = this.currentCargo + amount;
        } else {
            console.log(`Load capacity exceeded! Reduce the load.`);
        }
    }


    unloadCargo(amount: number): void {
        if (amount <= this.currentCargo) {
            this.currentCargo = this.currentCargo - amount;
        } else {
            console.log(`All that remains is ${this.currentCargo} to unload the entire cargo.`);
        }

    }
}