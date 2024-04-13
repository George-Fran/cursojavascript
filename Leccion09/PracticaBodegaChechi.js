// CHECHI GUME TIENDA INTERNACIONAL
class Producto{
    static contadorProductos = 0;
    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
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
        return `idProducto: ${this._idProducto}, Nombre: ${this._nombre}, Precio: S/.${this._precio}`;
    }
}

class Pedido{
    static contadorPedidos = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idPedido = Pedido.contadorPedidos;
        this._productos = [];
    }
    agregarProducto(producto){
        if(this._productos.length < Pedido.MAX_PRODUCTOS){
            this._productos.push(producto)
        } else {
            console.log('Ya no puedes agregar mas productos');
        }
    }

    calcularTotal(){
        let total = 0;
        for(let producto of this._productos){
            total += producto.precio;
        }

        return total;
    }

    mostrarDetalles(){
        let productoNombre = '';
        for(let producto of this._productos){
            productoNombre += '\n{' + producto.toString() + '}';
        }

        console.log(`idPedido: ${this._idPedido}, Total: S/.${this.calcularTotal()}, Productos: ${productoNombre}`);
    }
}

let leche = new Producto('Leche Gloria', 3);
let aceite = new Producto('Aceite Primor', 10);
let maltinPower = new Producto('Maltin Power', 1.50);
let cuates = new Producto('Cuates Picantes', 1);
let champoo = new Producto('Champoo Pantene', 2.50);

let pedido1 = new Pedido();

pedido1.agregarProducto(leche);
pedido1.agregarProducto(aceite);
pedido1.agregarProducto(maltinPower);
pedido1.agregarProducto(champoo);
pedido1.agregarProducto(cuates);
pedido1.agregarProducto(cuates);

pedido1.mostrarDetalles();