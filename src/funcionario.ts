export class Funcionario {
    private nome: string;
    private salario: number;
    private cargo: string;

    constructor(nome: string, salario: number, cargo: string) {
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo;
    }

    salarioLiquido(imposto: number, beneficios: number) {
        const salarioLiquido = this.salario - imposto + beneficios;
        return Number(salarioLiquido.toFixed(2));
    }
}

const funcionario = new Funcionario('Lailla', 3000, 'Desenvolvedora');
console.log("O salario Líquido é R$",funcionario.salarioLiquido(300, 500));