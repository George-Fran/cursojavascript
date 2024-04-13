miFuncion2();
miFuncion1();



function miFuncion1(){
    console.log('Funcion 1');
}

function miFuncion2(){
    console.log('Funcion 2');
}

//Funcion de tipo callback
let imprimir = mensaje => console.log(mensaje); // the same
let imp = function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}

sumar(5,3, imp);

//Llamadas asincronas con uso setTimeout
function miFuncionCallback(){
    console.log('Saludo asincrono despues de 3 segundos');
}

setTimeout(miFuncionCallback, 3000); // despues de 3 segundos

setTimeout(function(){ console.log('Hola 4 segundos')}, 4000);

setTimeout(() => console.log('Saludo asincrono 5 segundos'), 5000);

setTimeout(() => {
    console.log('Saludo 1 segundo');
}, 1000);