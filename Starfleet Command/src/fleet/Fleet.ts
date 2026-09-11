import { Spacecraft } from "../ships/Spacecraft";

export class Fleet {
    private ships: Spacecraft[] = [];

    public addShip(ship: Spacecraft): void {
        this.ships.push(ship);
    }

    public removeShip(id: number): void {
        for (let i = 0; i < this.ships.length; i++) {
            if (this.ships[i].getId() === id) {
                this.ships.splice(i, 1);
                return;
            }
        }
    }

    public findShip(id: number): Spacecraft | undefined {
        for (let i = 0; i < this.ships.length; i++) {
            if (this.ships[i].getId() === id) {
                return this.ships[i];
            }
        }

    }

    public showFleet(): void {
        for (const ship of this.ships) {
            ship.showStatus();
        }
    }
}