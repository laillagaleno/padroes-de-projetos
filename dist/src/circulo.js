"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circulo = void 0;
class Circulo {
    raio;
    constructor(raio) {
        this.raio = raio;
    }
    area() {
        const a = Math.PI * Math.pow(this.raio, 2);
        return Number(a.toFixed(2));
    }
    perimetro() {
        const p = 2 * Math.PI * this.raio;
        return Number(p.toFixed(2));
    }
}
exports.Circulo = Circulo;
