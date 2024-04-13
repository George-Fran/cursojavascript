let miPromesa = new Promise((resolver, rechazar) =>{
    let expression = true;
    if(expression)
        resolver('Resolvio correcto');
    else
        rechazar('Se produjo un error');
});

// miPromesa.then(
//     valor => console.log(valor),
//     error => console.log(error)
// );

//miPromesa.then(valor => console.log(valor)).catch(error => console.log(error));

let promesa = new Promise((resolver) => {
    console.log('Inicio promesa')
    setTimeout(() => resolver('saludos con promesa y timeout'), 3000);
    console.log('Fin promesa')
});

promesa.then(valor => console.log(valor));