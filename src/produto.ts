export class Produto{
    private nome: string;
    private preco: number;
    private qnt: number;

    constructor(nome: string, preço: number, qnt: number){
        this.nome = nome;
        this.preco = preço;
        this.qnt = qnt;
    }
    
    valorEstoque():number{
        return Number((this.preco * this.qnt).toFixed(2));
    }

    situacao(): string{
        if(this.qnt > 0) return "Produto disponivel!"
        return "Produto indisponivel!"
    }

}

const produto = new Produto("Notebook", 2500, 10);
console.log(produto.valorEstoque());
console.log(produto.situacao());