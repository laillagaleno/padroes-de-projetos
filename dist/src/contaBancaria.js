"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBancaria = void 0;
class ContaBancaria {
    numero;
    titular;
    saldo;
    constructor(numero, titular, saldo) {
        this.numero = numero;
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(valor) {
        this.saldo += valor;
        return {
            titular: this.titular,
            conta: this.numero,
            acrescimo: valor,
            saldo: this.saldo
        };
    }
    sacar(valor) {
        if (valor > this.saldo) {
            throw new Error('Saldo insuficiente');
        }
        this.saldo -= valor;
        return {
            titular: this.titular,
            conta: this.numero,
            decrescimo: valor,
            saldo: this.saldo
        };
    }
}
exports.ContaBancaria = ContaBancaria;
