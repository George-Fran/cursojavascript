let miFuncion = function (){
    console.log('Saludos desde mi funcion');
}


// const miFuncionFlecha = () => {
//     console.log('Saludos desde mi funcion flecha');
// }

// const miFuncionFlecha = () => console.log('Saludos desde mi funcion flecha');

// miFuncionFlecha();


// const saludar = () => {
//     return 'Saludos desde funcion flecha';
// }

const saludar = () => 'Saludos desde funcion flecha'; 

console.log(saludar());

const regresaObjeto = () => ({nombre: 'Juan', apellido: 'Lara'});
console.log(regresaObjeto());

const funcionConParametrosClasico = function(mensaje){
    console.log(mensaje);
}

// const funcionConParametros = (mensaje) => console.log(mensaje);
const funcionConParametros = mensaje => console.log(mensaje);
funcionConParametros('Saludos con parametros');

// const funcionConVariosParametros = (op1, op2) => op1 + op2;
const funcionConVariosParametros = (op1, op2) => {
    let resultado = op1 + op2;
    return `Resultado: ${resultado}`;
};
console.log(funcionConVariosParametros(3, 5));