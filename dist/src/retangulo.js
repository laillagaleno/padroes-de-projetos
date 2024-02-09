"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Retangulo = void 0;
class Retangulo {
    altura;
    largura;
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }
    area() {
        return this.altura * this.largura;
    }
    perimetro() {
        return 2 * (this.altura + this.largura);
    }
}
exports.Retangulo = Retangulo;
const retangulo = new Retangulo(10, 20);
console.log("Área:", retangulo.area());
console.log("Perimetro:", retangulo.perimetro());
