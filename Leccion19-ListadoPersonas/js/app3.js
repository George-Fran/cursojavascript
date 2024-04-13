let productos = [
    new Producto('Leche Gloria', 6),
    new Producto('Aceite Primor', 11)
];

function mostrarProductos() {
    let iterar = '';
    for(let producto of productos){
        iterar += `<li>${producto.nombre} | ${producto.precio} </li>`
        document.getElementById('productos').innerHTML = iterar;
    };
}

let agregar = document.getElementById('agregar');
agregar.addEventListener('click', () => {
    let forma = document.forms['forma'];
    let nombre = forma['nombre'];
    let precio = forma['precio'];
    if(nombre.value != '' && precio.value != ''){
        let producto = new Producto(nombre.value, precio.value);
        productos.push(producto);
        mostrarProductos();
    } else{
        console.log('no se pudo agregar')
    }
    nombre.value = '';
    precio.value = '';
});