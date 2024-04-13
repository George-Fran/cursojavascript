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
    //console.log('Inicio promesa')
    setTimeout(() => resolver('saludos con promesa y timeout'), 3000);
    //console.log('Fin promesa')
});

//promesa.then(valor => console.log(valor));

// async indica que una funcion regresa una promesa
async function miFuncionConPromesa() {
    return 'saludos con promesa y async';
}

//miFuncionConPromesa().then(valor => console.log(valor));


//async/await

async function funcionConPromesaYAwait(){
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con await');
    });

    console.log(await miPromesa);
}
//funcionConPromesaYAwait();


// promesas, await, async y setimeout
async function funcionConPromesaAwaitTimeout() {
    console.log('inicio funcion');
    let miPromesa = new Promise(resolver => {
        setTimeout(() => {
            resolver('Promesa con await y timeout')
        }, 3000);
    });
    console.log(await miPromesa);
    console.log('fin funcion');
}

funcionConPromesaAwaitTimeout();
 