import ask from "readline-sync";
import { Producer } from "./class/Producer";
import { FamilyFarmer } from "./class/FamilyFarmer";
import { CommunityGardenProducer } from "./class/CommunityGardenProducer";
import { Food } from "./class/Food";
import { Institution } from "./class/Institution";
import { Registry } from "./class/Registry";

// Instantiating the generic records
const foodRegistry = new Registry<Food>();
const institutionRegistry = new Registry<Institution>();
const producerRegistry = new Registry<Producer>();


let option = -1;
while (option !== 0) {
  console.clear();

  console.log(`
========================================
       RAÍZES DA TERRA COOPERATIVE
========================================

[1] Register producer
[2] Register food
[3] Register institution
[4] List producers
[5] List food
[6] List institutions
[7] Make donation
[0] Exit
  `);

  try {
    option = ask.questionInt("Choose an option: ");

    switch (option) {

      // 1. REGISTER PRODUCER
      case 1: {
        console.clear();
        console.log(`
--- REGISTER PRODUCER ---
1 - Family Farmer
2 - Community Garden Producer
        `);

        const type = ask.questionInt("Enter an option: ");
        const name = ask.question("Name: ");
        const cpf = ask.question("CPF (only numbers): ");
        if (cpf.length !== 11) {
          throw new Error("Invalid CPF! It must contain exactly 11 digits.");
        }
        const producedQuantity = ask.questionInt("Quantity of food produced (kg): ");

        if (type === 1) {
          const propertySize = ask.questionInt("Property size (hectares): ");
          const farmer = new FamilyFarmer(name, cpf, producedQuantity, propertySize);
          producerRegistry.add(farmer);

          console.log("\nProducer registered successfully:");
          farmer.present();

        } else if (type === 2) {
          const volunteers = ask.questionInt("Number of volunteers: ");
          const gardenProducer = new CommunityGardenProducer(name, cpf, producedQuantity, volunteers);
          producerRegistry.add(gardenProducer);

          console.log("\nProducer registered successfully:");
          gardenProducer.present();

        } else {
          console.log("Invalid producer type!");
        }

        ask.question("\nPress ENTER to continue...");
        break;
      }


      // 2. REGISTER FOOD
      case 2: {
        console.clear();
        console.log(`\n--- REGISTER FOOD ---`);

        const producerName = ask.question("Responsible producer: ");

        const producers = producerRegistry.list();

        let producer = null;

        for (let i = 0; i < producers.length; i++) {
          if (producers[i].getName() === producerName) {
            producer = producers[i];
            break;
          }
        }

        if (producer === null) {
          throw new Error("Producer not found!");
        }

        const foodName = ask.question("Food name: ");
        const category = ask.question("Category: ");
        const quantity = ask.questionFloat("Available quantity (kg): ");

        const food = new Food(foodName, category, quantity, producer.getName());
        foodRegistry.add(food);

        console.log("\nFood registered successfully!");
        console.log(`
  Food: ${food.getName()};
  Category: ${food.getCategory()};
  Quantity: ${food.getAvailableQuantity()} kg;
  Responsible producer: ${food.getResponsibleProducer()}
  `);

        ask.question("\nPress ENTER to continue...");
        break;
      }

      //REGISTER INSTITUTION
      case 3: {
        console.clear();
        console.log(`\n--- REGISTER INSTITUTION ---`);

        const instName = ask.question("Institution name: ");
        const address = ask.question("Address: ");
        const peopleServed = ask.questionInt("Number of people served: ");

        const institution = new Institution(instName, address, peopleServed);
        institutionRegistry.add(institution);

        console.log("\nInstitution registered successfully!");
        console.log(`
        Name: ${institution.getName()};
        Address: ${institution.getAddress()};
        People served: ${institution.getPeopleServed()};
        `);

        ask.question("\nPress ENTER to continue...");
        break;

      }


      //LIST PRODUCERS
      case 4: {
        console.clear();
        console.log(`\n--- LIST OF PRODUCERS ---`);

        const producers = producerRegistry.list();

        if (producers.length === 0) {
          console.log("No producers registered yet.");
        } else {
          for (const producer of producers) {
            producer.present();
          }
        }

        ask.question("\nPress ENTER to continue...");
        break;
      }

      // 5. LIST FOOD
      case 5: {
        console.clear();
        console.log(`\n--- LIST OF FOODS ---`);

        const foods = foodRegistry.list();

        if (foods.length === 0) {
          console.log("No food items registered yet.");
        } else {
          for (let i = 0; i < foods.length; i++) {
            console.log(`Food: ${foods[i].getName()} | Category: ${foods[i].getCategory()} | Available: ${foods[i].getAvailableQuantity()} kg | Producer: ${foods[i].getResponsibleProducer()}`);
          }
        }

        ask.question("\nPress ENTER to continue...");
        break;
      }


      //LIST INSTITUTIONS
      case 6: {
        console.clear();
        console.log(`\n--- LIST OF INSTITUTIONS ---`);

        const institutions = institutionRegistry.list();

        if (institutions.length === 0) {
          console.log("No institutions registered yet.");
        } else {
          for (let i = 0; i < institutions.length; i++) {
            console.log(
              `Institution: ${institutions[i].getName()} | Address: ${institutions[i].getAddress()} | People Served: ${institutions[i].getPeopleServed()} | Total Received: ${institutions[i].getTotalFoodReceived()} kg`
            );
          }
        }

        ask.question("\nPress ENTER to continue...");
        break;
      }


      //MAKE DONATION
      case 7: {
        console.clear();
        console.log(`\n--- MAKE DONATION ---`);

        //Search food
        const foodName = ask.question("Enter the food name: ");
        const foods = foodRegistry.list();
        let foundFood = null;

        for (let i = 0; i < foods.length; i++) {
          if (foods[i].getName() === foodName) {
            foundFood = foods[i];
            break;
          }
        }

        if (foundFood === null) {
          throw new Error("Food item not found in registry!");
        }

        //Search Institution
        const instName = ask.question("Enter the institution name: ");
        const institutions = institutionRegistry.list();
        let foundInst = null;

        for (let i = 0; i < institutions.length; i++) {
          if (institutions[i].getName() === instName) {
            foundInst = institutions[i];
            break;
          }
        }

        if (foundInst === null) {
          throw new Error("Institution not found in registry!");
        }

        // Request the quantity and make the donation.
        const quantityToDonate = ask.questionFloat("Quantity to donate (kg): ");

        foundInst.registerReceipt(foundFood, quantityToDonate);

        console.log("\nDonation successful!");
        console.log(`Donated ${quantityToDonate} kg of ${foundFood.getName()} to ${foundInst.getName()}.`);

        ask.question("\nPress ENTER to continue...");
        break;
      }

      //EXIT
      case 0: {
        console.log("\nExiting system... Goodbye!");
        break;
      }

      default: {
        console.log("Invalid option!");
        ask.question("\nPress ENTER to continue...");
        break;
      }
    }

  } catch (erro: unknown) {
    if (erro instanceof Error) {
      console.log(erro.message);

      ask.question("\nPress ENTER to return to the menu...");
    }
  }
}