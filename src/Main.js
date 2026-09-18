"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const Stock_1 = require("./Stock");
const Book_1 = require("./Book");
const Clothing_1 = require("./Clothing");
const Toy_1 = require("./Toy");
const Eletronic_1 = require("./Eletronic");
const stockBook = new Stock_1.Stock();
const stockClothing = new Stock_1.Stock();
const stockToy = new Stock_1.Stock();
const stockEletronic = new Stock_1.Stock();
let option = -1;
while (option !== 0) {
    console.clear();
    console.log(`
=========================
       STOCK SYSTEM
=========================

1 - Add product
2 - List products
3 - Remove product
4 - Search products
0 - Exit

Choose an option:
    `);
    option = Number(readline_sync_1.default.question('Enter an option: '));
    switch (option) {
        case 1:
            console.clear();
            console.log(`
=========================
       ADD PRODUCT
=========================

1 - Book
2 - Clothing
3 - Toy
4 - Electronic

Choose a product type:
         
`);
            let Choose1 = Number(readline_sync_1.default.question('Enter an option: '));
            if (Choose1 === 1) {
                console.log('\n ---NEW BOOK---');
                const title = readline_sync_1.default.question('Enter a title: ');
                const author = readline_sync_1.default.question('Enter an author: ');
                const price = Number(readline_sync_1.default.question('Enter an price: '));
                const newBook = new Book_1.Book(title, author, price);
                stockBook.toAdd(newBook);
                console.log('\n Book successfully added!');
                readline_sync_1.default.question('\nPress Enter to return to the menu...');
            }
            else if (Choose1 === 2) {
                console.log(`\n ---NEW CLOTHING---`);
                const description = readline_sync_1.default.question('Enter an description: ');
                const size = readline_sync_1.default.question('Enter an size: ');
                const price = Number(readline_sync_1.default.question('Enter an price: '));
                const newClothing = new Clothing_1.Clothing(description, size, price);
                stockClothing.toAdd(newClothing);
                console.log(`\n Clothing sucessfully added! `);
                readline_sync_1.default.question('\nPress Enter to return to the menu...');
            }
            else if (Choose1 === 3) {
                console.log(`---NEW TOY---`);
                const name = readline_sync_1.default.question(`Enter an name: `);
                const minimumAge = Number(readline_sync_1.default.question('Enter an minimum age: '));
                const price = Number(readline_sync_1.default.question(`Enter an price: `));
                const newToy = new Toy_1.Toy(name, minimumAge, price);
                stockToy.toAdd(newToy);
                console.log(`\n Toy sucessfully added! `);
                readline_sync_1.default.question('\nPress Enter to return to the menu...');
            }
            else if (Choose1 === 4) {
                console.log(`---NEW ELETRONIC---`);
                const model = readline_sync_1.default.question(`Enter an model: `);
                const mark = readline_sync_1.default.question(`Enter an mark: `);
                const price = Number(readline_sync_1.default.question(`Enter an price: `));
                const newEletronic = new Eletronic_1.Eletronic(model, mark, price);
                stockEletronic.toAdd(newEletronic);
                console.log(`\n Eletronic sucessfully added! `);
                readline_sync_1.default.question('\nPress Enter to return to the menu...');
            }
            break;
        case 2:
            console.clear();
            console.log(`
        
        =========================
               LIST PRODUCTS
        =========================
        
        1 - Book
        2 - Clothing
        3 - Toy
        4 - Electronic
        
        Choose a product type:
                 
         `);
            let Choose2 = Number(readline_sync_1.default.question('Enter an option: '));
            if (Choose2 === 1) {
                console.log(stockBook.list());
                readline_sync_1.default.question('\nPress Enter to return to the menu...');
            }
            else if (Choose2 === 2) {
                console.log(stockClothing.list());
                readline_sync_1.default.question(`\n Press Enter to return to the menu...`);
            }
            else if (Choose2 === 3) {
                console.log(stockToy.list());
                readline_sync_1.default.question(`\n Press Enter to return to the menu...`);
            }
            else if (Choose2 === 4) {
                console.log(stockEletronic.list());
                readline_sync_1.default.question(`\n Press Enter to return to the menu...`);
            }
            break;
        default:
            break;
    }
}
