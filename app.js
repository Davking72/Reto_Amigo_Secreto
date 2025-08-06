// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let listaDeAmigos = [];

function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor ingresa un nombre válido.");
    return;
  }

  listaDeAmigos.push(nombre);
  input.value = "";
  actualizarLista();
}

function actualizarLista() {
  let listaHTML = document.getElementById("listaAmigos");

  let contenido = "";
  for (let i = 0; i < listaDeAmigos.length; i++) {
    contenido += "<li>" + listaDeAmigos[i] + "</li>";
  }

  listaHTML.innerHTML = contenido;
}

function sortearAmigo() {
  if (listaDeAmigos.length === 0) {
    alert("La lista está vacía. Agrega al menos un nombre.");
    return;
  }

  let indice = Math.floor(Math.random() * listaDeAmigos.length);
  let nombreSorteado = listaDeAmigos[indice];

  document.getElementById("resultado").innerText = "El amigo secreto es: " + nombreSorteado;
}