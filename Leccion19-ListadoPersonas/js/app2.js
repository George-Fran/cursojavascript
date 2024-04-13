let mascotas = [
    new Mascota('Pepino', 'Gato'),
    new Mascota('Bobi', 'Perro')
];

function cargarMascotas() {
    let iterar = '';
    for(let mascota of mascotas){
        iterar += `<li>${mascota.nombre} | ${mascota.raza}</li>`;
        document.getElementById('mascotas').innerHTML = iterar; 
    }
}

let agregar = document.getElementById('agregar');
agregar.addEventListener('click', () => {
    const forma = document.forms['forma'];
    let nombre = forma['nombre'];
    let raza = forma['raza'];
    if(nombre.value != '' && raza.value != ''){
        let mascota = new Mascota(nombre.value, raza.value);
        mascotas.push(mascota);
        cargarMascotas();
    } else {
        console.log('no se ingreso nada');
    }
    nombre.value = '';
    raza.value = '';
});