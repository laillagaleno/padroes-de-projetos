export class Circulo{
    private raio: number;
    
    constructor(raio: number){
        this.raio = raio;
    }

    area(): number{
        const a = Math.PI * Math.pow(this.raio, 2);
        return Number(a.toFixed(2));
    }
    perimetro(): number{
        const p = 2 * Math.PI * this.raio;
        return Number(p.toFixed(2));
    }
}