class Book{
    titulo;
    autor;
    año;

    constructor(titulito,autorcito,añito){
        this.titulo=titulito;
        this.autor=autorcito;
        this.año=añito;
    }

    informacion(){
        return "Titulo: "+this.titulo+" Autor: "+this.autor+" Año: "+this.año;
    }
}

class Ebook extends Book{
    precio;

    constructor(titulo,autor,año,preciito){
        super(titulo,autor,año);
        this.precio=preciito;
    }

    informacion(){
        return super.informacion()+" Precio: "+this.precio;
    }
}

let libro1=new Ebook("Scripting Languages","Juan Perez",2025,50000);

console.log(libro1.informacion());