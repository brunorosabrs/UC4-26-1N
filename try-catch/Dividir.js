"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dividir = dividir;
function dividir(a, b) {
    if (b === 0) {
        throw new Error("Não é possível dividir por zero.");
    }
    return a / b;
}
