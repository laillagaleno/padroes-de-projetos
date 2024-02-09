export class ContaBancaria {
  private numero: number;
  private titular: string;
  private saldo: number;

  constructor(numero: number, titular: string, saldo: number) {
    this.numero = numero;
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor: number) {
    if(valor <= 0) {
      console.log("Valor inválido");
      return{
        titular: this.titular,
        conta: this.numero,
        acrescimo: 0,
        saldo: this.saldo
      }
    };

    this.saldo += valor;

    return {
      titular: this.titular,
      conta: this.numero,
      acrescimo: valor,
      saldo: this.saldo
    };
  }

  sacar(valor: number){
    if(valor > this.saldo){
      console.log("Saldo insuficiente");
      return{
        titular: this.titular,
        conta: this.numero,
        decrescimo: 0,
        saldo: this.saldo
      }
    }  

    if(valor <= 0){
      console.log("Valor inválido");
      return{
        titular: this.titular,
        conta: this.numero,
        decrescimo: 0,
        saldo: this.saldo
      }
    };
    
    this.saldo -= valor;

    return {
      titular: this.titular,
      conta: this.numero,
      decrescimo: valor,
      saldo: this.saldo
     }
  }
}

const conta = new ContaBancaria(198213823, "Lailla", 100);
const deposito = conta.depositar(100);
console.log(`${deposito.titular} você Depositou: ${deposito.acrescimo}, \nSaldo Final: ${deposito.saldo}`);
const saque = conta.sacar(100);
console.log(`${saque.titular} você Sacou: ${saque.decrescimo}, \nSaldo Final: ${saque.saldo}`);
console.log(conta.sacar(200));
console.log(conta.sacar(0));
console.log(conta.depositar(0));

