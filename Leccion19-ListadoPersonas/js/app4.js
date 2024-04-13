let frutasovegetales = [
    new FrutaVegetal('Mango', 'Fruta'),
    new FrutaVegetal('Lechuga', 'Vegetal')
];

function mostrarFrutasoVegetales() {
    let iterar = '';
    for(let frutaovegetal of frutasovegetales){
        iterar += `<li>${frutaovegetal.nombre} - ${frutaovegetal.frutavegetal}</li>`
    }
    document.getElementById('frutasovegetales').innerHTML = iterar;
}

let agregar = document.getElementById('agregar');
agregar.addEventListener('click', () => {
    let forma = document.forms['forma'];
    let nombre = forma['nombre'];
    let frutaovegetal = forma['frutaovegetal'];
    if(nombre.value != ''){
        let frutavegetal = new FrutaVegetal(nombre.value, frutaovegetal.value);

        frutasovegetales.push(frutavegetal);
        mostrarFrutasoVegetales();
    } else {
        alert('Falto agregar el nombre de alguna fruta o vegetal');
    }
});