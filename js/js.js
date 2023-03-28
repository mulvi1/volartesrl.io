/*Menu barra*/
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true; 
    }
    else{
        menu.style.display = "none";
        menu_visible = false
    }
}

/*Seccion informacion*/
var imagenActual = 0;
function cambiarImagen(event) {
    var imagenes = document.querySelectorAll('.imagen img');
    var ancho = event.currentTarget.offsetWidth;
    var x = event.offsetX;
    if (x < ancho / 2) {
        imagenActual--;
        if (imagenActual < 0) {
            imagenActual = imagenes.length - 1;
        }
    } else {
        imagenActual++;
        if (imagenActual >= imagenes.length) {
            imagenActual = 0;
        }
    }
    for (var i = 0; i < imagenes.length; i++) {
        imagenes[i].style.display = 'none';
    }
    imagenes[imagenActual].style.display = 'block';
}
var imagenActual = 0;
function cambiarImagen2(event) {
    var imagenes = document.querySelectorAll('.imagen2 img');
    var ancho = event.currentTarget.offsetWidth;
    var x = event.offsetX;
    if (x < ancho / 2) {
        imagenActual--;
        if (imagenActual < 0) {
            imagenActual = imagenes.length - 1;
        }
    } else {
        imagenActual++;
        if (imagenActual >= imagenes.length) {
            imagenActual = 0;
        }
    }
    for (var i = 0; i < imagenes.length; i++) {
        imagenes[i].style.display = 'none';
    }
    imagenes[imagenActual].style.display = 'block';
}
var imagenActual = 0;
function cambiarImagen3(event) {
    var imagenes = document.querySelectorAll('.imagen3 img');
    var ancho = event.currentTarget.offsetWidth;
    var x = event.offsetX;
    if (x < ancho / 2) {
        imagenActual--;
        if (imagenActual < 0) {
            imagenActual = imagenes.length - 1;
        }
    } else {
        imagenActual++;
        if (imagenActual >= imagenes.length) {
            imagenActual = 0;
        }
    }
    for (var i = 0; i < imagenes.length; i++) {
        imagenes[i].style.display = 'none';
    }
    imagenes[imagenActual].style.display = 'block';
}
var imagenActual = 0;
function cambiarImagen4(event) {
    var imagenes = document.querySelectorAll('.imagen4 img');
    var ancho = event.currentTarget.offsetWidth;
    var x = event.offsetX;
    if (x < ancho / 2) {
        imagenActual--;
        if (imagenActual < 0) {
            imagenActual = imagenes.length - 1;
        }
    } else {
        imagenActual++;
        if (imagenActual >= imagenes.length) {
            imagenActual = 0;
        }
    }
    for (var i = 0; i < imagenes.length; i++) {
        imagenes[i].style.display = 'none';
    }
    imagenes[imagenActual].style.display = 'block';
}