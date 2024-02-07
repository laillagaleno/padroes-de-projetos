export class Funcionario {
    private nome: string;
    private salario: number;
    private cargo: string;

    constructor(nome: string, salario: number, cargo: string) {
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo;
    }

    liquido(salarioBruto:number, descontos: number ): number {
        
        //descontar INSS(porcentagem do salário bruto)
        let inss: number;
        if(salarioBruto <= 1412){
            inss = this.salario * 0.08;
        }
        if(salarioBruto > 1412 && salarioBruto <= 2666.68){
            inss = this.salario * 0.09;
        }
        if(salarioBruto > 2666.68 && salarioBruto <= 4000.03){
            inss = this.salario * 0.12;
        }
        if(salarioBruto > 4000.03 && salarioBruto <= 7786.02){
            inss = this.salario * 0.14;
        }
    }
}