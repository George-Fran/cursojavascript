class Libro{
    static contadorLibros = 0;
    constructor(nombre, precio){
        this._idLibro = ++Libro.contadorLibros;
        this._nombre = nombre;
        this._precio = precio;
    }
    get idLibro(){
        return this._idLibro;
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
        this._precio = this.precio;
    }

    toString(){
        return `idLibro: ${this._idLibro}, nombre: ${this._nombre}, precio ${this._precio}`
    }
}

class Orden{
    static contadorOrdenes = 0;
    static get MAX_LIBROS(){
        return 5;
    }
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._libros = [];
    }
    agregarLibro(libro){
        if(this._libros.length < Orden.MAX_LIBROS){
            this._libros.push(libro);
        } else {
            console.log("no se pudo agregar un nuevo libro")
        }
    }

    mostrarTotal(){
        let total = 0;
        for(let libro of this._libros){
            total += libro.precio;
        }
        return total;
    }

    imprimirDetalle(){
        let librosAgregados = '';
        for(let libro of this._libros){
            librosAgregados += '\n {' + libro.toString() + '}';
        }
        console.log(`idOrden: ${this._idOrden}, Total: ${this.mostrarTotal()}, Libros: ${librosAgregados}`)
    }

}

let libro1 = new Libro('La divina comedia', 25);
let libro2 = new Libro('La odisea', 21);

let orden1 = new Orden();
orden1.agregarLibro(libro1);
orden1.agregarLibro(libro2);
orden1.agregarLibro(libro1);

orden1.imprimirDetalle();

let orden2 = new Orden();

let libro3 = new Libro('Paco Yunque', 15)
orden2.agregarLibro(libro1);
orden2.agregarLibro(libro3);
orden2.agregarLibro(libro1);
orden2.agregarLibro(libro1);
orden2.agregarLibro(libro1);
orden2.agregarLibro(libro3);
orden2.imprimirDetalle();