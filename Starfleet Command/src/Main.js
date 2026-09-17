"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TransportShip_1 = require("./ships/TransportShip");
const MultiPurposeShip_1 = require("./ships/MultiPurposeShip");
const Fighter_1 = require("./ships/Fighter");
const ExplorationShip_1 = require("./ships/ExplorationShip");
const Fleet_1 = require("./fleet/Fleet");
function startCombat(ship, target) {
    const damage = ship.attack(target);
    console.log(`${ship.getName()} attacked ${target.getName()} causing ${damage} of damage!`);
}
function transportCargo(ship, amount) {
    ship.loadCargo(amount);
    console.log(`${ship.getName()} loaded a cargo of ${amount}. current load: ${ship.getCurrentCargo()}/${ship.getCargoCapacity()}`);
}
function performExploration(ship, location) {
    console.log(`[${ship.getName()}] ${ship.explore(location)}`);
    console.log(`[${ship.getName()}] ${ship.collectData()}`);
}
function repairObject(object) {
    object.repair();
}
// INSTANCIAÇÃO DAS NAVES
const fighter1 = new Fighter_1.Fighter(50, 1, "Millennium Falcon", 500, 100);
const fighter2 = new Fighter_1.Fighter(40, 2, "X-Wing", 400, 100);
const transportShip1 = new TransportShip_1.TransportShip(3, "USCSS Nostromo", 500, 100, 500);
const transportShip2 = new TransportShip_1.TransportShip(4, "Heavy Transporter", 800, 100, 600);
const explorationShip1 = new ExplorationShip_1.ExplorationShip(5, "Serenity", 300, 100);
const explorationShip2 = new ExplorationShip_1.ExplorationShip(6, "Discovery", 400, 100);
const multiPurposeShip = new MultiPurposeShip_1.MultiPurposeShip(7, "USS Enterprise", 400, 100, 30, 300);
// MONTAGEM DA FROTA
const fleet = new Fleet_1.Fleet();
fleet.addShip(fighter1);
fleet.addShip(fighter2);
fleet.addShip(transportShip1);
fleet.addShip(transportShip2);
fleet.addShip(explorationShip1);
fleet.addShip(explorationShip2);
fleet.addShip(multiPurposeShip);
// ARRAYS POR TIPOS DE INTERFACE
//naves de combate
const combatShips = [];
combatShips.push(fighter1, fighter2, multiPurposeShip);
//naves de carga
const cargoShips = [];
cargoShips.push(transportShip1, transportShip2, multiPurposeShip);
//naves de exploração
const explorationShips = [];
explorationShips.push(explorationShip1, explorationShip2, multiPurposeShip);
// EXECUÇÃO DAS AÇÕES
console.log("=== COMPLETE FLEET ===");
fleet.showFleet();
console.log("\n=== COMBAT ===");
startCombat(fighter1, transportShip1);
console.log(`Current life of ${transportShip1.getName()}: ${transportShip1.getHealth()}`);
console.log("\n=== TRANSPORT OF CARGO ===");
transportCargo(transportShip1, 200);
console.log("\n=== EXPLORATION ===");
performExploration(explorationShip1, "Mars");
console.log("\n=== SHIP DAMAGE ===");
transportShip1.takeDamage(40);
console.log(`Current life of ${transportShip1.getName()}: ${transportShip1.getHealth()}`);
console.log("\n=== SHIP REPAIR ===");
repairObject(transportShip1);
console.log(`Current life of ${transportShip1.getName()} after the repair: ${transportShip1.getHealth()}`);
console.log("\n=== FUEL RECOVERY ===");
transportShip1.refuel(50);
console.log(`Fuel of ${transportShip1.getName()} after fuel recovery: ${transportShip1.getFuel()}`);
console.log("\n=== COMBAT SHIPS ===");
for (const ship of combatShips) {
    console.log(ship);
}
console.log("\n=== TRANSPORT SHIPS ===");
for (const ship of cargoShips) {
    console.log(ship);
}
console.log("\n=== EXPLORATION SHIPS ===");
for (const ship of explorationShips) {
    console.log(ship);
}
