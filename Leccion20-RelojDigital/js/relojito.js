const cargar = () => {
    let tiempo = new Date();
    let hora = cero(tiempo.getHours());
    let minuto = cero(tiempo.getMinutes());
    let segundo = cero(tiempo.getSeconds());
    document.getElementById('hora').innerHTML = `${hora}:${minuto}:${segundo}`

    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];

    let diaSemana = dias[tiempo.getDay()];
    let dia = tiempo.getDate();
    let mes = meses[tiempo.getMonth()];
    document.getElementById('fecha').innerHTML = `${diaSemana}, ${dia} ${mes}`
}
const cero = (hora) => {
    if(hora < 10)
        hora = "0" + hora;
    return hora
}
setInterval(cargar, 1000);