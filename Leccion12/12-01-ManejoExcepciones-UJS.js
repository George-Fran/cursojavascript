'use strict'

//manejamos errores
// si sucede un error, el programa se seguira ejecutando evitando este error y mandando a la consola que tipo de error es
try{
    let x = 10;
    //miFuncion();
}
catch(error){
    console.log(error);
}
finally{
    console.log('termina la revision de errores')
}
console.log('Continuamos...');