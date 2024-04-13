let a = '';
let ms = (tiempo, texto) => {
  a = texto
  let numero = tiempo.substring(0, 1);
  let segundos = numero * 1000;
  let minutos = numero * 60000;
  let hora = numero * 3600000;
  if (!isNaN(numero)) {
    if (tiempo == numero + "s") {
      return segundos;
    } else if (tiempo == numero + "m") {
      return minutos;
    } else if (tiempo == numero + "h") {
      return hora;
    } else {
      return "Tienes que especificar numero + tiempo \n 5 segundos = 5s, \n 5 minutos = 5m \n 5 horas = 5h";
    }
  } else {
    return 'El primer digito tiene que ser un numero';
  }

};

let hora = ms("1s", 'Dar de comer a los perros');
console.log(hora);

setTimeout(() => {
    console.log(`${a}`);
}, hora);
