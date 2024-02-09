"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    marca;
    modelo;
    velocidade;
    constructor(marca, modelo, velocidade = 0) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = velocidade;
    }
    acelerar(valor) {
        return this.velocidade += valor;
    }
    frear() {
        while (this.velocidade > 0) {
            this.velocidade -= 1;
            console.log(this.velocidadeAtual());
        }
        console.log("O carro parado!");
        return;
    }
    velocidadeAtual() {
        return this.velocidade;
    }
}
exports.Carro = Carro;
const carro = new Carro('Ford', 'Ka');
console.log("Velocidade atual:", carro.velocidadeAtual());
carro.acelerar(50);
console.log("Velocidade atual após acelerar:", carro.velocidadeAtual());
carro.frear();
console.log("Velocidade atual após frear:", carro.velocidadeAtual());
