let titulo = document.querySelector('h1');
titulo.innerHTML = "Elige al Amigo Secreto";

let segundotitulo = document.querySelector('h2');
segundotitulo.innerHTML = "Ingrese un nombre y click sobre el botón añadir";

let listaDeNombres = [];
listaDeNombres.push('null');

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;

    if (nombre === "") {
        alert("EL NOMBRE INGRESADO ES INVÁLIDO");
        document.getElementById('amigo').focus();
    } else {
        listaDeNombres.push(nombre);
        document.getElementById('amigo').value = "";
        document.getElementById('amigo').focus();

        let li = document.createElement('li');
        li.textContent = nombre;
        document.getElementById('listaAmigos').appendChild(li);
    }
}

function sortearAmigo() {
    let valor2 = generarAmigo();
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `el amigo seleccionado es "${listaDeNombres[valor2]}"`;

    setTimeout(() => {
        vaciarLista();
    }, 5000);


    }

function generarAmigo() {
    const lista = document.getElementById('listaAmigos');
    const cantidad = lista.children.length;
    console.log(`cantidad = ${cantidad}`);
    const valor = Math.floor(Math.random() * cantidad + 1);
    console.log(`valor = ${valor}`);
    return valor;
}

function vaciarLista() {
    let vaciar = document.getElementById('resultado');
    vaciar.innerHTML = "";

    let lista = document.getElementById('listaAmigos');
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    document.getElementById('amigo').focus();
}
