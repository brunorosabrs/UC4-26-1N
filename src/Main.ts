import ask from "readline-sync";
import { Stock } from "./Stock";
import { Book } from "./Book";
import { Clothing } from "./Clothing";
import { Toy } from "./Toy";
import { Eletronic } from "./Eletronic";

const stockBook = new Stock<Book>();
const stockClothing = new Stock<Clothing>();
const stockToy = new Stock<Toy>();
const stockEletronic = new Stock<Eletronic>();


let option = -1
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

    option = Number(ask.question('Enter an option: '));

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
            let Choose1 = Number(ask.question('Enter an option: '));
            if (Choose1 === 1) {
                console.log('\n ---NEW BOOK---');
                const title: string = ask.question('Enter a title: ');
                const author: string = ask.question('Enter an author: ');
                const price: number = Number(ask.question('Enter an price: '));
                const newBook = new Book(title, author, price);
                stockBook.toAdd(newBook);
                console.log('\n Book successfully added!');
                ask.question('\nPress Enter to return to the menu...');

            } else if (Choose1 === 2) {
                console.log(`\n ---NEW CLOTHING---`);
                const description: string = ask.question('Enter an description: ');
                const size: string = ask.question('Enter an size: ');
                const price: number = Number(ask.question('Enter an price: '));
                const newClothing = new Clothing(description, size, price);
                stockClothing.toAdd(newClothing);
                console.log(`\n Clothing sucessfully added! `);
                ask.question('\nPress Enter to return to the menu...');

            } else if (Choose1 === 3) {
                console.log(`---NEW TOY---`);
                const name: string = ask.question(`Enter an name: `);
                const minimumAge: number = Number(ask.question('Enter an minimum age: '));
                const price: number = Number(ask.question(`Enter an price: `));
                const newToy = new Toy(name, minimumAge, price);
                stockToy.toAdd(newToy);
                console.log(`\n Toy sucessfully added! `);
                ask.question('\nPress Enter to return to the menu...');

            } else if (Choose1 === 4) {
                console.log(`---NEW ELETRONIC---`);
                const model: string = ask.question(`Enter an model: `);
                const mark: string = ask.question(`Enter an mark: `);
                const price: number = Number(ask.question(`Enter an price: `));
                const newEletronic = new Eletronic(model, mark, price);
                stockEletronic.toAdd(newEletronic);
                console.log(`\n Eletronic sucessfully added! `);
                ask.question('\nPress Enter to return to the menu...');
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

            let Choose2 = Number(ask.question('Enter an option: '));
            if(Choose2 === 1) {
                console.log(stockBook.list());
                ask.question('\nPress Enter to return to the menu...');


            } else if (Choose2 === 2) {
                console.log(stockClothing.list());
                ask.question(`\n Press Enter to return to the menu...`);

            } else if (Choose2 === 3) {
                console.log(stockToy.list());
                ask.question(`\n Press Enter to return to the menu...`);

            } else if (Choose2 === 4) {
                console.log(stockEletronic.list());
                ask.question(`\n Press Enter to return to the menu...`);

            }
            break;
            
            

            


        default:
            break;
    }

}