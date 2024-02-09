export class Triangulo{
    private a: number;
    private b: number;
    private c: number;

    constructor(a: number, b: number, c: number){
        this.a = a;
        this.b = b;
        this.c = c;
    }

    isTriangulo():boolean {
        if((this.b - this.c) < this.a && this.a < (this.b + this.c)){
            if((this.a - this.c) < this.b && this.b < (this.a + this.c)){
                if((this.a - this.b) < this.c && this.c < (this.a + this.b)){
                    return true;
                }
            }
        }
        return false;
    }
    
    //s = (a+b+c)/2
    area(): number | null{
        const isTriangulo = this.isTriangulo();
        if(!isTriangulo){
            return null;
        }
       
        const s = (this.a + this.b + this.c)/2;
        return Math.sqrt(s*(s-this.a)*(s-this.b)*(s-this.c));
    }
}

const triangulo = new Triangulo(3, 4, 5);
console.log(triangulo.isTriangulo() ? "É um triângulo" : "Não é um triângulo");
console.log("Área:",triangulo.area());