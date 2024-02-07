import { Circulo } from "./src/circulo";
import { Retangulo } from "./src/retangulo";

const retangulo = new Retangulo(5, 10);
const area = retangulo.area();
const perimetro = retangulo.perimetro();

console.log("Área do retângulo:", area);
console.log("Perímetro do retângulo:", perimetro);


const citculo = new Circulo(5.7);
const areaC = citculo.area();
const perimetroC = citculo.perimetro();

console.log("Área do círculo:", areaC);
console.log("Perímetro do círculo:", perimetroC);