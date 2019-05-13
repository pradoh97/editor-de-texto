window.addEventListener('load', main);

function main(){
  const botonNegrita = document.getElementById('negrita').addEventListener('click', negrita);
  const botonItalica = document.getElementById('italica').addEventListener('click',italica);
  const botonSubrayado = document.getElementById('subrayado').addEventListener('click',subrayado);
  const botonAlinearIzquierda = document.getElementById('alinear-izquierda').addEventListener('click',alinearIzquierda);
  const botonAlinearCentro = document.getElementById('alinear-centro').addEventListener('click',alinearCentro);
  const botonAlinearDerecha = document.getElementById('alinear-derecha').addEventListener('click',alinearDerecha);
  const botonJustificar = document.getElementById('justificar').addEventListener('click',justificar);
  const contenido = document.querySelector('.contenido');
}

/* Obtener cursor/selección */

/* Funciones de estilo de caracteres */
function negrita(){
    let texto = prompt('Escriba el texto:');
    if (texto === null) {
        contenido.innerHTML;
    }else{
        contenido.innerHTML += `<strong>${texto}</strong>`
    }
}
function italica(){
    let texto = prompt('Escriba el texto:');
    if (texto === null) {
        contenido.innerHTML;
    }else{
        contenido.innerHTML += `<em>${texto}</em>`
    }
}
function subrayado(){
  let texto = prompt('Escriba el texto:');
  if (texto === null) {
      contenido.innerHTML;
  }else{
      contenido.innerHTML += `<span style="text-decoration:underline">${texto}</span>`
  }
}

/* Funciones de alineación */
function alinearIzquierda(){
  let texto = prompt('Escriba el texto:');
  if (texto === null) {
      contenido.innerHTML;
  }else{
      contenido.innerHTML += `<p style="text-align:left">${texto}</span>`
  }
}
function alinearCentro(){
  let texto = prompt('Escriba el texto:');
  if (texto === null) {
      contenido.innerHTML;
  }else{
      contenido.innerHTML += `<p style="text-align:center">${texto}</span>`
  }
}
function alinearDerecha(){
  let texto = prompt('Escriba el texto:');
  if (texto === null) {
      contenido.innerHTML;
  }else{
      contenido.innerHTML += `<p style="text-align:right">${texto}</span>`
  }
}
function justificar(){
  let texto = prompt('Escriba el texto:');
  if (texto === null) {
      contenido.innerHTML;
  }else{
      contenido.innerHTML += `<p style="text-align:justify">${texto}</span>`
  }
}

/* Funciones adjuntar multimedia */
