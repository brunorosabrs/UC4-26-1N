export abstract class Spacecraft {
    private id: number;
    private name: string;
    private fuel: number;
    private health: number;


    public constructor(id: number, name: string, fuel: number, health: number) {
        this.id = id;
        this.name = name;
        this.fuel = fuel;
        if (this.fuel < 0) {
            this.fuel = 0;
        }
        this.health = health;
    }


    //Getters
    public getId(): number {
        return this.id;
    }
    public getName(): string {
        return this.name;
    }
    public getFuel(): number {
        return this.fuel;
    }
    public getHealth(): number {
        return this.health;
    }

    //Method
    public consumeFuel(amount: number): boolean {
        if (this.isOperational() && this.fuel >= amount) {
            this.fuel = this.fuel - amount;
            return true;
        }
        return false;
    }

    public refuel(amount: number): void {
        this.fuel = this.fuel + amount
    }

    public takeDamage(damage: number): void {
        this.health = this.health - damage;
        if (this.health < 0) {
            this.health = 0;
        }
    }

    public repair(): void {
        this.health = this.health + 20;
        if (this.health > 100) {
            this.health = 100;
        }
    }

    public isOperational(): boolean {
        if (this.health > 0 && this.fuel > 0) {
            return true;
        } else {
            return false;
        }
    }

    public showStatus(): void {
        console.log(`Ship: ${this.getName()} | Health: ${this.getHealth()} | Fuel: ${this.getFuel()}`);
    }
}


