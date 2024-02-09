"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    nome;
    preco;
    qnt;
    constructor(nome, preço, qnt) {
        this.nome = nome;
        this.preco = preço;
        this.qnt = qnt;
    }
    valorEstoque() {
        return Number((this.preco * this.qnt).toFixed(2));
    }
    situacao() {
        if (this.qnt > 0)
            return "Produto disponivel!";
        return "Produto indisponivel!";
    }
}
exports.Produto = Produto;
const produto = new Produto("Notebook", 2500, 10);
console.log(produto.valorEstoque());
console.log(produto.situacao());
