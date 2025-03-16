// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
console.log(amigos);
function agregarAmigo() {
  const nombre = document.getElementById("amigo").value.trim();
  
  // Comprobar si el ingreso esta vacio
  if (nombre !== '') {
    // Comprobar si el ingreso es solo numeros
    if (/^\d+$/.test(nombre)) {
      alert('Por favor, inserte un nombre, no numeros');
    } else {
      // Comprobar si el nombre ya existe en la lista
      if (amigos.includes(nombre)) {
        alert('Este nombre ya existe, cambiarlo');
      } else {
        amigos.push(nombre);
        actualizarListaAmigos();
        document.getElementById("amigo").value = '';
      }
    }
  } else {
    alert('Por favor, inserte un nombre.');
  }
}

// Actualizar la lista de amigos
function actualizarListaAmigos() {
  const listaAmigos = document.getElementById("amigo");
  listaAmigos.textContent = amigos.join(', ');
}

// Funcion barajar la lista de amigos
function barajar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Funcion sortear y mostrar resultado
function sortear() {
  if (amigos.length < 2) {
    alert('Necesita por lo menos 2 amigos para sortear');
    return;
  }

  // Copia de lista original amigos
  const listaSorteo = amigos.slice();
  barajar(listaSorteo);

  const listaSorteoHTML = listaSorteo.map((amigo, index) => {
    const proximoAmigo = index === listaSorteo.length - 1 ? listaSorteo[0] : listaSorteo[index + 1];
   return `<span class="amigo-nombre" onclick="alternarnombre(this)">${amigo} <span class="amigo-oculto" style="visibility: hidden">${proximoAmigo}</span></span>`;
  }).join('<br>');

   const listaSorteoElement = document.getElementById("lista-sorteo");
   listaSorteoElement.innerHTML = listaSorteoHTML;

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    // Mostra amigo sorteado de la consulta ID "resultado"
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
}


// Funcion para reiniciar el sorteo
function reiniciar() {
  amigos = [];
  document.getElementById("amigo").textContent = '';
  document.getElementById("lista-sorteo").textContent = '';
}