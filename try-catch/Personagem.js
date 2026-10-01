"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    constructor(nome, vida) {
        this.nome = nome;
        this.vida = vida;
    }
    receberDano(dano) {
        if (dano <= 0) {
            throw new Error("O dano deve ser maior que zero.");
        }
        if (dano > this.vida) {
            throw new Error(" O dano não pode ser maior que a vida");
        }
        this.vida -= dano;
        console.log(`Vida: ${this.vida}`);
    }
}
exports.Personagem = Personagem;
