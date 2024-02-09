export class Retangulo {
  private altura: number;
  private largura: number;

  constructor(altura: number, largura: number) {
    this.altura = altura;
    this.largura = largura;
  }

  area(): number {
    return this.altura * this.largura;
  }

  perimetro(): number {
    return 2 * (this.altura + this.largura);
  }
}

const retangulo = new Retangulo(10, 20);
console.log("Área:", retangulo.area());
console.log("Perimetro:",retangulo.perimetro());