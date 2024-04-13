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
    static saludar(){
        console.log("hola mundo desde un metodo static");
    }
    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
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
console.log(persona1.toString());
console.log( empleado1.toString() );

//persona1.saludar() no es posible llamar un metodo static desde un objeto
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);