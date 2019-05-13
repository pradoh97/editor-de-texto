window.addEventListener('load', main);

function main(){
    //Texto
  const botonNegrita = document.getElementById('negrita').addEventListener('click', negrita);
  const botonItalica = document.getElementById('italica').addEventListener('click',italica);
  const botonSubrayado = document.getElementById('subrayado').addEventListener('click',subrayado);
    //Alineación
  const botonAlinearIzquierda = document.getElementById('alinear-izquierda').addEventListener('click',alinearIzquierda);
  const botonAlinearCentro = document.getElementById('alinear-centro').addEventListener('click',alinearCentro);
  const botonAlinearDerecha = document.getElementById('alinear-derecha').addEventListener('click',alinearDerecha);
  const botonJustificar = document.getElementById('justificar').addEventListener('click',justificar);
    //Otros
  const botonInsertarEnlace = document.getElementById('insertar-enlace').addEventListener('click',insertarEnlace);

  const contenido = document.querySelector('.contenido');
}

/* Obtener cursor/selección */

function negrita(){
    document.execCommand('bold');   
}

function italica(){
    document.execCommand('italic');
}
function subrayado(){
    document.execCommand('underline');
}

/* Funciones de alineación */
function alinearIzquierda(){
    document.execCommand('justifyLeft');
}
function alinearCentro(){
    document.execCommand('justifyCenter');
}
function alinearDerecha(){
    document.execCommand('justifyRight');
}
function justificar(){
    document.execCommand('justifyFull');
}

/* Funciones adjuntar multimedia */

function insertarEnlace(){
    let linkURL = prompt('Ingrese el link:', 'http://');
    let textoSeleccionado = window.getSelection();
    document.execCommand('insertHTML', false, `<a href="${linkURL}" target="_blank">${textoSeleccionado}</a>`);
}
