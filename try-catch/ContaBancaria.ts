class ContaBancaria {

    private titular: string;
    private saldo: number;

    constructor(saldo: number, titular: string) {
        this.saldo = saldo;
        this.titular = titular;
    }


    public depositar(valor: number): void {
        if (valor <= 0) {
            throw new Error("Erro! O valor deve ser maior que 0.");
        }
        this.saldo = valor + this.saldo;

    }

    
    public sacar(valor: number): void {

        if (valor <= 0) {
            throw new Error("O valor do saque deve ser maior que zero.");
        }

        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente.");
        }

        this.saldo -= valor;
    }

    public mostrarSaldo(): void {
        console.log(`Saldo: R$ ${this.saldo}`);
    }
}