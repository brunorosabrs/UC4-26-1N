export class Resident {
    protected name: string;
    protected age: number;

    public constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public getName(): string {
        return this.name;
    }
    public getAge(): number {
        return this.age;
    }

    //method
    public work(): void {
        console.log(`${this.name} is working...`);
    }
}