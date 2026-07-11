class Employee{
    nombre;
    salario;

    constructor(nombrecito,salariito){
        this.nombre=nombrecito;
        this.salario=salariito;
    }

    calcularSalario(){
        return this.salario*12;
    }
}

class Manager extends Employee{
    departamento;
    bono;

    constructor(nombre,salario,departamentico,bonito){
        super(nombre,salario);
        this.departamento=departamentico;
        this.bono=bonito;
    }

    calcularSalario(){
        return (this.salario*12)+this.bono;
    }
}

let gerente1=new Manager("Carlos",2500000,"Ventas",3000000);
console.log("Nombre: "+gerente1.nombre);
console.log("Departamento: "+gerente1.departamento);
console.log("Salario anual: "+gerente1.calcularSalario());

let gerente2=new Manager("Julian",3000000,"Sistemas",5000000);
console.log("Nombre: "+gerente2.nombre);
console.log("Departamento: "+gerente2.departamento);
console.log("Salario anual: "+gerente2.calcularSalario());