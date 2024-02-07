"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
class Aluno {
    nome;
    matricula;
    notas;
    constructor(nome, matricula, notas) {
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;
    }
    media() {
        let soma = 0;
        for (let nota of this.notas) {
            soma += nota;
        }
        return soma / this.notas.length;
    }
    situacao() {
        const media = this.media();
        if (media >= 7) {
            return "Aprovado";
        }
        else {
            return "Reprovado";
        }
    }
}
exports.Aluno = Aluno;
