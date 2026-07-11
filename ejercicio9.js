class Bank{
    nombreBanco;
    sucursales;

    constructor(nombrecito){
        this.nombreBanco=nombrecito;
        this.sucursales=[];
    }

    agregarSucursal(sucursal){
        this.sucursales.push(sucursal);
        console.log("Sucursal agregada");
    }

    eliminarSucursal(sucursal){
        let posicion=this.sucursales.indexOf(sucursal);

        if(posicion!=-1){
            this.sucursales.splice(posicion,1);
            console.log("Sucursal eliminada");
        }
        else{
            console.log("La sucursal no existe");
        }
    }

    mostrarSucursales(){
        console.log(this.sucursales);
    }
}

let banco1=new Bank("Banco Colombia");

banco1.agregarSucursal("Popayan");
banco1.agregarSucursal("Cali");
banco1.agregarSucursal("Bogota");

banco1.mostrarSucursales();

banco1.eliminarSucursal("Cali");

banco1.mostrarSucursales();