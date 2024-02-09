"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
class Funcionario {
    nome;
    salario;
    cargo;
    constructor(nome, salario, cargo) {
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo;
    }
    salarioLiquido(imposto, beneficios) {
        const salarioLiquido = this.salario - imposto + beneficios;
        return Number(salarioLiquido.toFixed(2));
    }
}
exports.Funcionario = Funcionario;
const funcionario = new Funcionario('Lailla', 3000, 'Desenvolvedora');
console.log("O salario Líquido é R$", funcionario.salarioLiquido(300, 500));
