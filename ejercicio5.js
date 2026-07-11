class Shape{

    calcularArea(){

    }
}
class circle extends Shape{
radio;
    constructor(radito){
        super();
        this.radio=radito

    }
    calcularArea(){
         return Math.PI * this.radio * this.radio;
    }
}

class triangle extends Shape{
    base;
    altura;
    constructor(basita,alturita){
        super();
        this.base=basita;
        this.altura=alturita;
    }
    calcularArea(){
         return (this.base*this.altura)/2;
    }
    
}

let circulo = new circle(7);
console.log("EL area de circulo es: " + circulo.calcularArea());

let triangulo = new triangle(6,3);
console.log("EL area del triangulo es: " + triangulo.calcularArea());