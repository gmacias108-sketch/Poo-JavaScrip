class BankAccount {
    numeroCuenta;
    saldo
    constructor(numeroCuentica,saldito){
        this.numeroCuenta=numeroCuentica
        this.saldo=saldito
    }
    informacion(){
        return "cuenta:"+this.numeroCuenta+"Su saldo es:"+ this.saldo;
    }
    deposito(cantidad){
        
        this.saldo=this.saldo+cantidad;
        console.log("el dinero se ha abonado a su cuenta"+this.saldo);
    }
    retiro(monto){
        if (monto > this.saldo){
            console.log("El valor a retirar es mayor que el saldo en su cuenta");
        }
        else{
            this.saldo= this.saldo-monto;
            console.log("retiro extoso"+ this.saldo);
        }      
    }
}

let depos1 = new BankAccount(123456, 0);
console.log(depos1.informacion());

depos1.deposito(1000);
depos1.retiro(200);
console.log(depos1.informacion());


let depos2 = new BankAccount(123456, 5000);
console.log(depos2.informacion());

depos2.retiro(1000);
console.log(depos2.informacion());


let retir1 = new BankAccount(123456, 2000);
console.log(retir1.informacion());

retir1.retiro(3000);

