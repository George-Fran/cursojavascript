'use strict'
let resultado = -1;

try{
    //x = 10;
    if(isNaN(resultado)) throw 'No es un numero'; // throw sirve para mandar nuestros propios errores
    else if(resultado === '') throw ' Es cadena vacia'; 
    else if(resultado >= 0) throw 'Valor positivo';
    else if(resultado < 0) throw 'Valor negativo';
}
catch(error){
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);
}
finally{
    console.log('Termina revision de errores');
}

let numero = 20;

try {
    if(numero == 10) throw 'Es 10';
    else throw 'NO es 10';
} catch (error) {
    console.log(error);
}