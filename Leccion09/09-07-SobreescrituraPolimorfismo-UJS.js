class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
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
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
    // Sobreescribiendo el metodo de la clase Padre(Object)
    toString(){
        /* Se aplica polimorfismo (multiples formas en tiempo de ejecucion)
        el metodo que se ejecuta depende si es una referencia de tipo padre
        o de tipo hijo*/
        return this.nombreCompleto();
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){ 
        super(nombre, apellido); // llamar al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento() {
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }

    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}
let persona1 = new Persona('Juan', 'Perez');

console.log( persona1.toString() );//get nombre 

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log(empleado1);
console.log( empleado1.toString() );


class Humano {
    constructor(nombre, apellido, dni){
        this._nombre = nombre;
        this._apellido = apellido;
        this._dni = dni;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
    toString(){
        return this.nombreCompleto();
    }
}

class Alumno extends Humano{
    constructor(nombre, apellido, dni, salon){
        super(nombre, apellido, dni);
        this._salon = salon;
    };

    get salon(){
        return this._salon;
    }
    set salon(salon){
        this._salon = salon;
    }

    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._salon;
    }
}

let humano1 = new Humano('Juan', 'Perez', '71957575');
let alumno1 = new Alumno('George', 'Rodriguez', '72921212', '3B');

console.log(humano1.toString());
console.log(alumno1.toString());