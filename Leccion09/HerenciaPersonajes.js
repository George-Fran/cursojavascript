class Personaje{
    constructor(nombre, vida, fuerza, habilidad){
        this._nombre = nombre;
        this._vida = vida;
        this._fuerza = fuerza;
        this._habilidad = habilidad;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    dañoPoder(){
        return this._fuerza * this._habilidad / 2.5;
    }
}

let personaje1 = new Personaje('Jodes', 100, 75, 22);

class Mago extends Personaje{
    constructor(nombre, vida, fuerza, habilidad, magia){
        super(nombre, vida, fuerza, habilidad)
        this._magia = magia;
    }

    get magia(){
        return this._magia;
    }
    set magia(magia){
        this._magia = magia;
    }
    dañoPoder(){
        return super.dañoPoder() + this._magia;
    }
}
let mago1 = new Mago('Wicho', 85, 65, 52, 82);
console.log(mago1.dañoPoder());