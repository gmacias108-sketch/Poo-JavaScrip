class Vehiculos {
    marca;
    modelo;
    año;
    constructor(marcita,modelito,añito){
        this.marca=marcita
        this.modelo=modelito
        this.año=añito
    }
    informacion(){
        return "marca: "+ this.marca + " modelo: "+ this.modelo + " año modelo:" + this.año
    }
}

class Coche extends Vehiculos{
    numeroPuertas;
    constructor(marca,modelo,año,puerticas){
        super(marca,modelo,año)
        this.numeroPuertas=puerticas;
    }
    informacion(){
        return super.informacion()+" puertas: "+this.numeroPuertas;
}
}
let carro = new Coche("fiat", "fast", 2026, 4);
console.log(carro.informacion());
