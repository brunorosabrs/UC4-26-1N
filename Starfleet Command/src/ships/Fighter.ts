import { Spacecraft } from "./Spacecraft";
import { CombatCapable } from "../interfaces/CombatCapable";
import { Repairable } from "../interfaces/Repairable";

export class Fighter extends Spacecraft implements CombatCapable, Repairable {
    private weaponPower: number;

    public constructor(weaponPower: number, id: number, name: string, fuel: number, health: number) {
        super(id, name, fuel, health)
        this.weaponPower = weaponPower;
    }

    public attack(target: Spacecraft): number {
        if (this.isOperational() === false) {
            return 0
        }
        const damage = this.weaponPower;
        target.takeDamage(damage);

        return damage;
    }

        public getRepairCost(): number {
        return 500;
    }
}