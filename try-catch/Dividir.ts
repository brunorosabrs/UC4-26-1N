export function dividir(a: number, b: number): number {

    if (b === 0) {
        throw new Error("Não é possível dividir por zero.");
    }

    return a / b;
}
