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

    public loadCargo(amountCargo): void {
        if (amountCargo <= this.cargoCapacity )
        this.currentCargo = this.currentCargo + amountCargo;
    } else 
    
}