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

    area(): number{
        const h: number = Math.sqrt(Math.pow(this.a, 2) - Math.pow(this.b, 2) + Math.pow(this.c, 2))/2
        return (this.c * h)/2;
    }
}