export class Paciente{
    private nome: string;
    private idade: number;
    private historico: number[]

    constructor(nome: string, idade: number, historico: number[]){
        this.nome = nome;
        this.idade = idade;
        this.historico = historico;
    }
}