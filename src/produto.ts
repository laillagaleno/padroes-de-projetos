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
        return this.preco * this.qnt;
    }

    situacao(): string{
        if(this.qnt > 0) return "Produto disponivel!"
        return "Produto indisponivel!"
    }

}