import ask from "readline-sync";
import { Producer } from "./classes/Producer";
import { FamilyFarmer } from "./classes/FamilyFarmer";
import { CommunityGardenProducer } from "./classes/CommunityGardenProducer";
import { Food } from "./classes/Food";
import { Institution } from "./classes/Institution";
import { Registry } from "./classes/Registry";


const producerRegistry = new Registry<Producer>();
const foodRegistry = new Registry<Food>();
const institutionRegistry = new Registry<Institution>();

function showMenu(): void {
  console.log("\n========================================");
  console.log("       RAÍZES DA TERRA COOPERATIVE      ");
  console.log("========================================");
  console.log("[1] Register producer");
  console.log("[2] Register food");
  console.log("[3] Register institution");
  console.log("[4] List producers");
  console.log("[5] List food");
  console.log("[6] List institutions");
  console.log("[7] Make donation");
  console.log("[0] Exit");
  console.log("========================================");
}

function runMenu(): void {
  let running = true;

  while (running) {
    showMenu();
    const option = ask.question("Choose an option: ");

    try {
      switch (option) {
        case "1":
          // Lógica para cadastrar produtor
          break;
        case "2":
          // Lógica para cadastrar alimento
          break;
        case "3":
          // Lógica para cadastrar instituição
          break;
        case "4":
          // Listar produtores com polimorfismo (present())
          console.log("\n--- PRODUCERS ---");
          producerRegistry.list().forEach((producer) => producer.present());
          break;
        case "5":
          // Listar alimentos
          console.log("\n--- FOOD INVENTORY ---");
          foodRegistry.list().forEach((food) => {
            console.log(
              `${food.getName()} | Category: ${food.getCategory()} | Qty: ${food.getAvailableQuantity()} kg`
            );
          });
          break;
        case "6":
          // Listar instituições
          console.log("\n--- INSTITUTIONS ---");
          institutionRegistry.list().forEach((inst) => {
            console.log(
              `${inst.getName()} | Address: ${inst.getAddress()} | People served: ${inst.getPeopleServed()}`
            );
          });
          break;
        case "7":
          // Lógica para realizar doação
          break;
        case "0":
          console.log("Exiting system. Goodbye!");
          running = false;
          break;
        default:
          console.log("Invalid option. Please try again.");
      }
    } catch (error: any) {
      console.log(`Error: ${error.message || "An unexpected error occurred."}`);
    }
  }
}

runMenu();
