export class ContaBancaria {
  private numero: number;
  private titular: string;
  private saldo: number;

  constructor(numero: number, titular: string, saldo: number) {
    this.numero = numero;
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor: number): { titular: string, conta: number, acrescimo: number, saldo: number } {
    this.saldo += valor;

    return {
      titular: this.titular,
      conta: this.numero,
      acrescimo: valor,
      saldo: this.saldo
    };
  }

  sacar(valor: number): { titular: string, conta: number, decrescimo: number, saldo: number} {
    if(valor > this.saldo) {
      throw new Error('Saldo insuficiente');
    }
    
    this.saldo -= valor;
    return {
      titular: this.titular,
      conta: this.numero,
      decrescimo: valor,
      saldo: this.saldo
     }
  }
}
