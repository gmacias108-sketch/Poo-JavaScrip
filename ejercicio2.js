class Rectangle {
    ancho;
    alto;
    constructor(anchito,altico){
        this.ancho=anchito;
        this.alto=altico;
        }
        calcularArea () {
        return this.ancho*this.alto;
        }
        calcularPerimetro() {
        return 2*(this.ancho + this.alto);
        }

}

let recatangle= new Rectangle(5,5);
//console.log(calcularArea());

let area= recatangle.calcularArea();
let perimetro= recatangle.calcularPerimetro();

console.log(area);
console.log(perimetro);




