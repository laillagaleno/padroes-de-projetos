export class Carro{
    private marca: string;
    private modelo: string;
    private velocidade: number;

    constructor(marca: string, modelo:string, velocidade: number){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = velocidade;
    }

    acelerar(valor: number): number{
        return this.velocidade += valor; 
    }

    frear(){
        for(let i=0; this.velocidade > 0; i +=1){
           this.velocidade -= i;
        }
    }

    velocidadeAtual():number{
        return this.velocidade;
    }
}