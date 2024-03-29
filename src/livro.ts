export class Livro{
    private titulo: string;
    private autor: string;
    private paginas: number;
    private situacao: boolean;

    constructor(titulo: string, autor: string, paginas: number, situacao: boolean){
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.situacao = situacao;
    }   
    emprestar(){
        if(this.situacao == true){
            console.log("Livro emprestado");
            this.situacao = false;
        }else{
            console.log("Livro indisponível");
        }
    }

    devolver(){
        if(this.situacao == false){
            console.log("Livro devolvido");
            this.situacao = true;
        }else{
            console.log("Livro já está na biblioteca");
        }
    }

    verificarSituacao(){
        if(this.situacao == true){
            console.log("Livro disponível");
        }else{
            console.log("Livro indisponível");
        }
    }
}

const livro = new Livro("Padrões de Projetos", "Erich Gamma", 580, true);
livro.emprestar();
livro.emprestar();
livro.devolver();
livro.devolver();
livro.verificarSituacao();


