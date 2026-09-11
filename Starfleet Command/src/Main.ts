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




