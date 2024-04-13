class Mascota{
    constructor(nombre, raza){
        this._nombre = nombre;
        this._raza = raza;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get raza(){
        return this._raza;
    }
    set raza(raza){
        this._raza = raza;
    }
}