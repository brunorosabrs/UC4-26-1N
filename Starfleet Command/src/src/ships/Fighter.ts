import { Spacecraft } from "./Spacecraft";
import { CombatCapable } from "../interfaces/CombatCapable";

export class Fighter extends Spacecraft implements CombatCapable {
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
}