class Animal{
    especie;
    sonido;

    constructor(especita,sonidito){
        this.especie=especita;
        this.sonido=sonidito;
    }

    hacerSonido(){
        return "Especie: "+this.especie+" Sonido: "+this.sonido;
    }
}

class Dog extends Animal{
    color;

    constructor(especie,sonido,colorcito){
        super(especie,sonido);
        this.color=colorcito;
    }

    hacerSonido(){
        return super.hacerSonido()+" Color: "+this.color;
    }
}

let perro1=new Dog("Perro","Guau Guau","Negro");

console.log(perro1.hacerSonido());