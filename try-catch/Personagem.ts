export class Personagem {

    private nome: string;
    private vida: number;

    constructor(nome: string, vida: number) {
        this.nome = nome;
        this.vida = vida;
    }

    public receberDano(dano: number): void {

        if (dano <= 0) {
            throw new Error("O dano deve ser maior que zero.");
        }
        if (dano > this.vida) {
            throw new Error(" O dano não pode ser maior que a vida")
        }

        this.vida -= dano;

        console.log(`Vida: ${this.vida}`);
    }




}