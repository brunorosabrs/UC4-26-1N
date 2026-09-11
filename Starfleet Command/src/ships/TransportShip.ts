import { Spacecraft } from "./Spacecraft";
import { CargoCarrier } from "../interfaces/CargoCarrier";

export class TransportShip extends Spacecraft implements CargoCarrier {
    private cargoCapacity: number;
    private currentCargo: number;

    public constructor(cargoCapacity: number, currentCargo: number, id: number, name: string, fuel: number, health: number) {
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