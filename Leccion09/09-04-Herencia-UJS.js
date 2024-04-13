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
}
let persona1 = new Persona('Juan', 'Perez');

console.log( persona1 );//get nombre 

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log(empleado1);
console.log( empleado1.nombre );


// Practicando 
class Animal{
    constructor(ojos, patas){
        this._ojos = ojos;
        this._patas = patas;
    }

    get ojos(){
        return this._ojos;
    }
    set ojos(ojos){
        this._ojos = ojos;
    }

    get patas(){
        return this._patas;
    }
    set patas(patas){
        this._patas = patas
    }
}
let nose = new Animal('2', '4');
console.log(nose);
class Gato extends Animal{
    constructor(ojos, patas, nombre){
        super(ojos, patas);
        this._nombre = nombre;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
}

let miau = new Gato('2', '4', 'Gato');
console.log(miau);
console.log(miau.patas);