"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangulo = void 0;
class Triangulo {
    a;
    b;
    c;
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    isTriangulo() {
        if ((this.b - this.c) < this.a && this.a < (this.b + this.c)) {
            if ((this.a - this.c) < this.b && this.b < (this.a + this.c)) {
                if ((this.a - this.b) < this.c && this.c < (this.a + this.b)) {
                    return true;
                }
            }
        }
        return false;
    }
    //s = (a+b+c)/2
    area() {
        const isTriangulo = this.isTriangulo();
        if (!isTriangulo) {
            return null;
        }
        const s = (this.a + this.b + this.c) / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
}
exports.Triangulo = Triangulo;
const triangulo = new Triangulo(3, 4, 5);
console.log(triangulo.isTriangulo());
console.log(triangulo.area());
