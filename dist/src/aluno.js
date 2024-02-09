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
        const media = soma / this.notas.length;
        return Number(media.toFixed(2));
    }
    situacao() {
        const media = this.media();
        if (media < 7)
            return "Reprovado";
        return "Aprovado";
    }
}
exports.Aluno = Aluno;
const aluno = new Aluno('Lailla', '20211BCC0041', [10, 9.5, 9]);
console.log("Média do aluno:", aluno.media());
console.log("Situação do aluno:", aluno.situacao());
