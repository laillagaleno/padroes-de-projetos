export class Carro{
    private marca: string;
    private modelo: string;
    private velocidade: number;

    constructor(marca: string, modelo:string, velocidade: number = 0){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = velocidade;
    }

    acelerar(valor: number): number{
        return this.velocidade += valor; 
    }

    frear(){
        while (this.velocidade > 0){
            this.velocidade -= 1;
           console.log(this.velocidadeAtual());
        }
        console.log("O carro parado!")
        return;
    }

    velocidadeAtual():number{
        return this.velocidade;
    }
}

const carro = new Carro('Ford', 'Ka');
console.log("Velocidade atual:", carro.velocidadeAtual());
carro.acelerar(50);
console.log("Velocidade atual após acelerar:", carro.velocidadeAtual());
carro.frear();
console.log("Velocidade atual após frear:", carro.velocidadeAtual()); 