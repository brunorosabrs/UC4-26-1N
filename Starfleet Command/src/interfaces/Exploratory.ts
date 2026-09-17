import { Spacecraft } from "../ships/Spacecraft";

//Interface não vai nenhuma lógica, apenas coloco os métodos que classe que implementa-lo vai precisar obrigatoriamente ter
export interface Exploratory {
    explore(location: string): string;
    collectData(): string;
}