class Producto{
    static contadorProductos = 0;
    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    get _idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }
    toString(){
        return `${this._idProducto} ${this._nombre} ${this._precio};`
    }
}

class Orden{
    static contadorOrdenes = 0;
    static contadorProductosAgregados = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }
    constructor(){
        if(Orden.contadorProductosAgregados > Orden.MAX_PRODUCTOS){
            
        }
        this._idProducto = ++Orden.contadorOrdenes;
    }

}
