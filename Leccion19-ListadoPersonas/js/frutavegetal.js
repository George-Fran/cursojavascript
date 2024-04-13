class FrutaVegetal{
    constructor(nombre, frutavegetal){
        this._nombre = nombre;
        this._frutavegetal = frutavegetal;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get frutavegetal(){
        return this._frutavegetal;
    }
    set frutavegetal(frutavegetal){
        this._frutavegetal = frutavegetal;
    }
}