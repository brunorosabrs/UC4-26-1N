export class Stock<T> {
    constructor(
        private items: T[] = []
    ) { }


    //METHOD
    public toAdd(item: T): void {
        this.items.push(item)
    }

    public list(): T[] {
        return this.items
    }

    public remove(index: number): void {
        this.items.splice(index, 1);
    }

    public search(condition: (item: T) => boolean): T[] {
        return this.items.filter(condition);
    }

}

