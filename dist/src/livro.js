"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
class Livro {
    titulo;
    autor;
    paginas;
    situacao;
    constructor(titulo, autor, paginas, situacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.situacao = situacao;
    }
    emprestar() {
        if (this.situacao == true) {
            console.log("Livro emprestado");
            this.situacao = false;
        }
        else {
            console.log("Livro indisponível");
        }
    }
    devolver() {
        if (this.situacao == false) {
            console.log("Livro devolvido");
            this.situacao = true;
        }
        else {
            console.log("Livro já está na biblioteca");
        }
    }
    verificarSituacao() {
        if (this.situacao == true) {
            console.log("Livro disponível");
        }
        else {
            console.log("Livro indisponível");
        }
    }
}
exports.Livro = Livro;
const livro = new Livro("Padrões de Projetos", "Erich Gamma", 580, true);
livro.emprestar();
livro.emprestar();
livro.devolver();
livro.devolver();
livro.verificarSituacao();
