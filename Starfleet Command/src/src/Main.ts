import { Spacecraft } from "./ships/Spacecraft";
import { TransportShip } from "./ships/TransportShip";
import { MultiPurposeShip } from "./ships/MultiPurposeShip";
import { Fighter } from "./ships/Fighter";
import { ExplorationShip } from "./ships/ExplorationShip";
import { Exploratory } from "./interfaces/Exploratory";
import { CombatCapable } from "./interfaces/CombatCapable";
import { CargoCarrier } from "./interfaces/CargoCarrier";




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

const fighter = new Fighter(10, 1, "Millennium Falcon ", 500, 3000);
const transportShip = new TransportShip(500, 0, 2, "USCSS Nostromo", 700, 5000);
const explorationShip = new ExplorationShip(3, "Serenity", 3000, 4000 );
const multiPurposeShip = new MultiPurposeShip(4, "USS Enterprise", 600, 5400, 30, 3000);

startCombat(fighter, transportShip)
startCombat(multiPurposeShip, fighter)
performExploration(explorationShip, "Mars")
performExploration(multiPurposeShip, "Jupiter")

const combatShips: CombatCapable[] = [];

combatShips.push(fighter);
combatShips.push(multiPurposeShip);