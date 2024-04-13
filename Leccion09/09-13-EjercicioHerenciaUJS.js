class Persona {
    static contadorPersonas = 0;
    constructor(nombre, apellido, edad){
        this.idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get IdPersona(){
        return this.idPersona;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
    completoTodo(){
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido + ' ' + this._edad;
    }

    toString(){
        return this.completoTodo();
    }
}

class Empleado extends Persona{
    static contadorEmpleados = 0;
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this.idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }
    get IdEmpleado(){
        return this.idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    completoTodo(){
        return super.completoTodo() + ' ,' + this.idEmpleado + ' ' + this._sueldo;
    }
}

class Cliente extends Persona{
    static contadorClientes = 0;
    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this.idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }
    get IdCliente(){
        return this.idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    completoTodo(){
        return super.completoTodo() + ' ,' + this.IdCliente + ' ' + this._fechaRegistro;
    }
}

let empleado1 = new Empleado('Karla', 'Gomez', 25, 5000);
console.log(empleado1.toString());