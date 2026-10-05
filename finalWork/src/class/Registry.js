"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registry = void 0;
class Registry {
    constructor() {
        this.items = [];
    }
    // Adds an item to the list
    add(item) {
        this.items.push(item);
    }
    // Returns all items
    list() {
        return this.items;
    }
}
exports.Registry = Registry;
