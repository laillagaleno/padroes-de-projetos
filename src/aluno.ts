export class Aluno {
    private nome: string;
    private matricula: string;
    private notas: number[];

    constructor(nome: string, matricula:string, notas: number[]) {
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;
    }

    media(): number {
        let soma = 0;
        for (let nota of  this.notas ) {
            soma += nota;
        }
        return soma / this.notas.length;
    }

    situacao(): string {
        const media = this.media();

        if (media >= 7) {
            return "Aprovado";
        } else {
            return "Reprovado";
        }
    }
}