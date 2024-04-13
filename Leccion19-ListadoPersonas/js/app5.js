let personas = [new Persona("Juan", "Perez"), new Persona("Carlos", "Tevez")];

function mostrarPersonas() {
  let iterar = "";
  for (let persona of personas) {
    iterar += `<li>${persona.nombre} ${persona.apellido}</li>`;
    document.getElementById("personas").innerHTML = iterar;
  }
}

let agregar = document.getElementById("agregar");
agregar.addEventListener("click", () => {
  let forma = document.forms["forma"];
  let nombre = forma["nombre"];
  let apellido = forma["apellido"];
  let persona = new Persona(nombre.value, apellido.value);
  if (nombre.value != "" && apellido.value != "") {
    personas.push(persona);
    mostrarPersonas();
    nombre.value = "";
    apellido.value = "";
  } else {
    alert('Falta argumentos en los input');
  }
});
