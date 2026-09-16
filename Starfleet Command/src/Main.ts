import { Spacecraft } from "./ships/Spacecraft";
import { TransportShip } from "./ships/TransportShip";
import { MultiPurposeShip } from "./ships/MultiPurposeShip";
import { Fighter } from "./ships/Fighter";
import { ExplorationShip } from "./ships/ExplorationShip";
import { Exploratory } from "./interfaces/Exploratory";
import { CombatCapable } from "./interfaces/CombatCapable";
import { CargoCarrier } from "./interfaces/CargoCarrier";
import { Repairable } from "./interfaces/Repairable";



function startCombat(ship: CombatCapable, target: Spacecraft): void {
    ship.attack(target);
}

function transportCargo(ship: CargoCarrier, amount: number): void {
    ship.loadCargo(amount);
    ship.unloadCargo(amount);
}

function performExploration(ship: Exploratory, location: string): void {
    ship.explore(location);
    ship.collectData();
}

function repairObject(object: Repairable): void {
    object.repair();
}
// PARTE 14:
// Para responder no seu projeto:

// Por que não podemos fazer new Repairable()?
// Interfaces são contratos abstratos. Servem apenas para dizer o que um objeto deve conter, não como ele é construído.

// Por que uma interface não deve ser utilizada para criar objetos?
// Porque ela define apenas um contrato de comportamento, e não como o objeto é construído

// Qual é a diferença entre interface CombatCapable e class Fighter? Explique com suas próprias palavras.
// CombatCapable é apenas um contrato que fala o que deve conter, exigindo que exista um método attack. Já a classe Fighter é a implementação que decide como o ataque acontece. 

//PARTE 15: 
//A vantagem de usar método getId e getName é que o encapsulamento é preservado, sem risco de de alterar o valor por fora da classe

//PARTE 16:
// Por que isso é útil:
// Permite que naves diferentes guardem seus dados do jeito que quiserem, mas como todas cumprem a mesma promessa (CombatCapable), o sistema consegue dar ordens para elas do mesmo jeito, sem precisar conhecer seus detalhes internos.

// Usar a interface (CombatCapable) aceita qualquer nave atual ou futura que saiba lutar. Se usasse a classe específica (Fighter), a função só aceitaria caças, o que obrigaria a criar código repetido para outros tipos de nave.


const fighter = new Fighter(10, 1, "Millennium Falcon ", 500, 3000);
const transportShip = new TransportShip(500, 0, 2, "USCSS Nostromo", 700, 5000);
const explorationShip = new ExplorationShip(3, "Serenity", 3000, 4000 );
const multiPurposeShip = new MultiPurposeShip(4, "USS Enterprise", 600, 5400, 30, 3000);

startCombat(fighter, transportShip)
startCombat(multiPurposeShip, fighter)
performExploration(explorationShip, "Mars")
performExploration(multiPurposeShip, "Jupiter")




// Array para naves de combate
const combatShips: CombatCapable[] = [];
combatShips.push(fighter);
combatShips.push(multiPurposeShip);

// Array para naves exploradoras
const explorationShips: Exploratory[] = [];
explorationShips.push(explorationShip);
explorationShips.push(multiPurposeShip);

// Array para naves de transportar carga
const cargoShips: CargoCarrier[] = [];
cargoShips.push(transportShip);
cargoShips.push(multiPurposeShip);








////////////////////////////////////// NEW MAIN:
import { Spacecraft } from "./ships/Spacecraft";
import { TransportShip } from "./ships/TransportShip";
import { MultiPurposeShip } from "./ships/MultiPurposeShip";
import { Fighter } from "./ships/Fighter";
import { ExplorationShip } from "./ships/ExplorationShip";
import { Exploratory } from "./interfaces/Exploratory";
import { CombatCapable } from "./interfaces/CombatCapable";
import { CargoCarrier } from "./interfaces/CargoCarrier";
import { Fleet } from "./fleet/Fleet";


function startCombat(ship: CombatCapable, target: Spacecraft): void {
    const damage = ship.attack(target);

    console.log(`Ataque realizado contra ${target.getName()}! Dano causado: ${damage}`);
}
function transportCargo(ship: CargoCarrier, amount: number): void {
    ship.loadCargo(amount);
    console.log(
        `Carga atual: ${ship.getCurrentCargo()}/${ship.getCargoCapacity()}`
    );
}
function performExploration(ship: Exploratory, location: string): void {
    console.log(ship.explore(location));
    console.log(ship.collectData());
}



// INSTANCIAÇÃO DAS NAVES

const fighter1 = new Fighter(50, 1, "Millennium Falcon", 500, 100);
const fighter2 = new Fighter(40, 2, "X-Wing", 400, 100);

const transportShip1 = new TransportShip(
    500,
    3,
    3,
    "USCSS Nostromo",
    700,
    500
);

const transportShip2 = new TransportShip(
    1000,
    4,
    4,
    "Heavy Transporter",
    800,
    500
);

const explorationShip1 = new ExplorationShip(
    5,
    "Serenity",
    300,
    100
);

const explorationShip2 = new ExplorationShip(
    6,
    "Discovery",
    400,
    100
);

const multiPurposeShip = new MultiPurposeShip(
    7,
    "USS Enterprise",
    600,
    100,
    30,
    3000
);


// MONTAGEM DA FROTA

const fleet = new Fleet();

fleet.addShip(fighter1);
fleet.addShip(fighter2);

fleet.addShip(transportShip1);
fleet.addShip(transportShip2);

fleet.addShip(explorationShip1);
fleet.addShip(explorationShip2);

fleet.addShip(multiPurposeShip);


// ARRAYS TIPADOS POR INTERFACE

const combatShips: CombatCapable[] = [
    fighter1,
    fighter2,
    multiPurposeShip
];

const cargoShips: CargoCarrier[] = [
    transportShip1,
    transportShip2,
    multiPurposeShip
];

const explorationShips: Exploratory[] = [
    explorationShip1,
    explorationShip2,
    multiPurposeShip
];


// EXECUÇÃO DAS AÇÕES

console.log("=== 1. FROTA COMPLETA ===");
fleet.showFleet();

console.log("\n=== 2. COMBATE ===");
startCombat(fighter1, transportShip1);

console.log("\n=== 3. TRANSPORTE DE CARGA ===");
transportCargo(transportShip1, 200);

console.log("\n=== 4. EXPLORAÇÃO ===");
performExploration(explorationShip1, "Mars");

console.log("\n=== 5. DANO EM NAVE ===");
transportShip1.takeDamage(40);

console.log(`Vida atual da ${transportShip1.getName()}: ${transportShip1.getHealth()}`);


console.log("\n=== 6. REPARO DE NAVE ===");
transportShip1.repair(20);

console.log(`Vida da ${transportShip1.getName()} após reparo: ${transportShip1.getHealth()}`);


console.log("\n=== 7. RECUPERAR COMBUSTÍVEL ===");
transportShip1.refuel(50);

console.log(`Combustível da ${transportShip1.getName()} após reabastecimento: ${transportShip1.getFuel()}`);


console.log("\n=== 8. NAVES DE COMBATE ===");
for (const ship of combatShips) {
    ship.attack(transportShip1);
    console.log(ship);
}


console.log("\n=== 9. NAVES DE TRANSPORTE ===");
for (const ship of cargoShips) {
    console.log(
        `Carga: ${ship.getCurrentCargo()}/${ship.getCargoCapacity()}`
    );
}


console.log("\n=== 10. NAVES DE EXPLORAÇÃO ===");
for (const ship of explorationShips) {
    console.log(ship.collectData());
}



