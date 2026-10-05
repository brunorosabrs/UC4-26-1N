export class Registry<T> {
    private items: T[] = [];

    // Adds an item to the list
    public add(item: T): void {
        this.items.push(item);
    }

    // Returns all items
    public list(): T[] {
        return this.items;
    }

}