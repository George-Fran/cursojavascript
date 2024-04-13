let miFuncion = function (){
    console.log('Saludos desde mi funcion');
}


const miFuncionFlecha = () => {
    console.log('Saludos desde mi funcion flecha');
}

const sumar = (a, b) => {
    return a + b;
}
miFuncion();

miFuncionFlecha();

console.log(sumar(1, 2));