"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stock = void 0;
class Stock {
    constructor(items = []) {
        this.items = items;
    }
    //METHOD
    toAdd(item) {
        this.items.push(item);
    }
    list() {
        return this.items;
    }
    remove(index) {
        this.items.splice(index, 1);
    }
    search(condition) {
        return this.items.filter(condition);
    }
}
exports.Stock = Stock;
