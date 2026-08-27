"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const Rooms_1 = require("./Rooms");
const Doctor_1 = require("./Doctor");
const Engineer_1 = require("./Engineer");
const Scientist_1 = require("./Scientist");
const Soldier_1 = require("./Soldier");
//Criacao dos arrays vazios de moradores e salas
const residents = [];
const rooms = [];
//criando os objetos das salas do Vault
const reactor = new Rooms_1.Rooms("Reactor", 10);
const purifier = new Rooms_1.Rooms("Purifier", 15);
const plantation = new Rooms_1.Rooms("Plantation", 30);
const infirmary = new Rooms_1.Rooms("Infirmary", 8);
const workshop = new Rooms_1.Rooms("Workshop", 10);
const bedroom = new Rooms_1.Rooms("Bedroom", 40);
// Adicionando os objetos das salas ao array rooms
rooms.push(reactor);
rooms.push(purifier);
rooms.push(plantation);
rooms.push(infirmary);
rooms.push(workshop);
rooms.push(bedroom);
// Inicia a opção do menu
let option = -1;
// Enquanto opção for diferente de 0, menu continua rodando
while (option !== 0) {
    console.clear();
    console.log(`\x1b[38;5;118m
==============================
       VAULT-TEC
==============================

1- Register resident
2- List residents
3- Register room
4- List rooms
5- Assign resident
6- Remove resident
7- View room occupants
0- Exit the Vault
\x1b[0m`);
    option = readline_sync_1.default.questionInt("Enter an option: ");
    switch (option) {
        // Cadastrando um novo morador
        case 1:
            const name = readline_sync_1.default.question("Name: ");
            const age = readline_sync_1.default.questionInt("Age: ");
            console.log(`\x1b[38;5;118m
==============================
          SPECIALTY
==============================
1- Doctor
2- Engineer
3- Soldier
4- Scientist
\x1b[0m`);
            const specialty = readline_sync_1.default.questionInt("Enter the number of the chosen specialty: ");
            if (specialty === 1) {
                const crm = readline_sync_1.default.question("CRM: ");
                residents.push(new Doctor_1.Doctor(name, age, crm));
            }
            if (specialty === 2) {
                const crea = readline_sync_1.default.question("CREA: ");
                residents.push(new Engineer_1.Engineer(name, age, crea));
            }
            if (specialty === 3) {
                const rank = readline_sync_1.default.question("Rank: ");
                residents.push(new Soldier_1.Soldier(name, age, rank));
            }
            if (specialty === 4) {
                const researchArea = readline_sync_1.default.question("Research area: ");
                residents.push(new Scientist_1.Scientist(name, age, researchArea));
            }
            readline_sync_1.default.question("\nPress ENTER to continue...");
            break;
        // Listando os moradores cadastrados   
        case 2:
            for (let i = 0; i < residents.length; i++) {
                console.log(residents[i].getName());
            }
            readline_sync_1.default.question("\nPress ENTER to continue...");
            break;
        // Cadastra uma nova sala    
        case 3:
            const roomName = readline_sync_1.default.question("Nome da sala: ");
            const capacity = readline_sync_1.default.questionInt("Capacidade: ");
            rooms.push(new Rooms_1.Rooms(roomName, capacity));
            break;
        // Lista as salas que já estão cadastradas
        case 4:
            for (let i = 0; i < rooms.length; i++) {
                console.log(`${i + 1} - ${rooms[i].getName()} - Capacity: ${rooms[i].getCapacity()}`);
            }
            readline_sync_1.default.question("\nPress ENTER to continue...");
            break;
        // Aloca um morador em uma sala
        case 5:
            console.log("Residents:");
            residents.forEach((resident, index) => {
                console.log(`${index + 1} - ${resident.getName()}`);
            });
            const residentIndex = readline_sync_1.default.questionInt("Choose the resident: ") - 1;
            const resident = residents[residentIndex];
            // Verificar se o morador já está em alguma sala
            let alreadyInRoom = false;
            rooms.forEach((room) => {
                if (room.getResidents().includes(resident)) {
                    alreadyInRoom = true;
                }
            });
            if (alreadyInRoom) {
                console.log("This resident is already in a room.");
                readline_sync_1.default.question("\nPress ENTER to continue...");
                break;
            }
            console.log("Rooms:");
            //Percorre o array de salas cadastradas, imprimindo cada uma delas
            rooms.forEach((room, index) => {
                console.log(`${index + 1} - ${room.getName()}`);
            });
            const roomIndex = readline_sync_1.default.questionInt("Choose the room: ") - 1;
            rooms[roomIndex].addResident(resident);
            readline_sync_1.default.question("\nPress ENTER to continue...");
            break;
        // Remove um morador de uma sala
        case 6:
            console.log("Rooms:");
            //Percorre o array de salas, e lista cada uma delas
            rooms.forEach((room, index) => {
                console.log(`${index + 1} - ${room.getName()}`);
            });
            //Cria uma variável que recebe o numero da sala a ser removida pelo usuario
            const roomIndexRemove = readline_sync_1.default.questionInt("Escolha a sala: ") - 1;
            const roomRemove = rooms[roomIndexRemove];
            console.log("Residents:");
            const roomResidents = roomRemove.getResidents();
            roomResidents.forEach((resident, index) => {
                console.log(`${index + 1} - ${resident.getName()}`);
            });
            const residentIndexRemove = readline_sync_1.default.questionInt("Choose the resident: ") - 1;
            roomRemove.removeResident(roomResidents[residentIndexRemove]);
            console.log("Resident removed from the room.");
            readline_sync_1.default.question("\nPress ENTER to continue...");
            break;
        // Mostra os moradores de uma sala
        case 7:
            console.log("Rooms:");
            rooms.forEach((room, index) => {
                console.log(`${index + 1} - ${room.getName()}`);
            });
            //Escolhendo a sala para visualizar
            const roomIndexView = readline_sync_1.default.questionInt("Choose the room: ") - 1;
            const roomView = rooms[roomIndexView];
            console.log(`Room occupants: ${roomView.getName()}:`);
            const residentsInRoom = roomView.getResidents();
            residentsInRoom.forEach((resident) => {
                console.log(resident.getName());
            });
            readline_sync_1.default.question("\nPress ENTER to continue...");
            break;
        // Encerra o programa
        case 0:
            console.log("Leaving...");
            break;
        default:
            console.log("Invalid option.");
    }
}
