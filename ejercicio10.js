class Product{
    idProducto;
    nombre;
    precio;

    constructor(idcito,nombrecito,preciito){
        this.idProducto=idcito;
        this.nombre=nombrecito;
        this.precio=preciito;
    }

    calcularPrecio(cantidad){
        return this.precio*cantidad;
    }
}

class PersonalCareProduct extends Product{
    garantia;

    constructor(id,nombre,precio,garantica){
        super(id,nombre,precio);
        this.garantia=garantica;
    }

    calcularPrecio(cantidad){
        return super.calcularPrecio(cantidad);
    }

    informacion(){
        return "Producto: "+this.nombre+" Garantia: "+this.garantia+" meses";
    }
}

let producto1=new PersonalCareProduct(101,"Shampoo",18000,12);

console.log(producto1.informacion());

let total=producto1.calcularPrecio(3);

console.log("Precio total: "+total);