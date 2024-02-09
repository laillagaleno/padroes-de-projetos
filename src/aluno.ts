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
        const media = soma / this.notas.length;

        return Number(media.toFixed(2));
    }

    situacao(): string {
        const media = this.media();

        if (media < 7) return "Reprovado";

        return "Aprovado";
    }
}

const aluno = new Aluno('Lailla', '20211BCC0041', [10, 9.5, 9]);
console.log("Média do aluno:", aluno.media());
console.log("Situação do aluno:", aluno.situacao());