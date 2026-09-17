import { Spacecraft } from "./Spacecraft";
import { CombatCapable } from "../interfaces/CombatCapable";
import { CargoCarrier } from "../interfaces/CargoCarrier";
import { Exploratory } from "../interfaces/Exploratory";

export class MultiPurposeShip extends Spacecraft implements CombatCapable, CargoCarrier, Exploratory {

    private weaponPower: number;
    private cargoCapacity: number;
    private currentCargo: number;

    constructor(id: number, name: string, fuel: number, health: number, weaponPower: number, cargoCapacity: number) {
        super(id, name, fuel, health);

        this.weaponPower = weaponPower;
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


    //METHOD
    // CombatCapable
    public attack(target: Spacecraft): number {
        if (this.isOperational() === false) {
            return 0
        }
        const damage = this.weaponPower;
        target.takeDamage(damage);

        return damage;
    }

    // CargoCarrier
    public loadCargo(amount: number): void {
        if (amount + this.currentCargo <= this.cargoCapacity) {
            this.currentCargo = this.currentCargo + amount;
        } else {
            console.log(`Load capacity exceeded! Reduce the load.`);
        }
    }

    public unloadCargo(amount: number): void {
        if (amount <= this.currentCargo) {
            this.currentCargo = this.currentCargo - amount;
        } else {
            console.log(`All that remains is ${this.currentCargo} to unload the entire cargo.`);
        }

    }

    // Exploratory
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