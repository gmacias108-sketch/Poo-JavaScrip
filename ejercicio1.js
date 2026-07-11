class Persona{
    nombre;
    edad;
    pais;
    constructor(name,age,country){
        this.nombre=name;
        this.edad=age;
        this.pais=country;
    }
    informacion(){
        return "name: " + this.nombre + " age:"+ this.edad + " pais: "+this.pais;
    }
}

let persona1 = new Persona ("carlos", 25 , "colombia");
console.log(persona1.informacion());
let persona2 = new Persona ("Julian", 30 , "Argentina");
console.log(persona2.informacion());