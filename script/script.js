let isOpen = false;

function handlerEvents() {
    let boton = document.getElementById('botonMenu');
    boton.addEventListener('click' ,handlerMenu)
}

function handlerMenu() {
    let opciones = document.getElementById('header__ul');
    let opcion = document.getElementById('header__li');
    let icono = document.getElementById('iconoBoton');
    if(isOpen === false) {
        opciones.classList.add('header__ul--responsive');
        opciones.classList.remove('header__ul');
        opcion.classList.add('header__li--responsive');
        opcion.classList.remove('header__li');
        icono.className = 'fa-solid fa-xmark';
        isOpen = true;
    }else {
        opciones.classList.add('header__ul');
        opciones.classList.remove('header__ul--responsive');
        opcion.classList.add('header__li');
        opcion.classList.remove('header__li--responsive');
        icono.className = 'fa-solid fa-bars';
        isOpen = false;
    }
}







window.onload = handlerEvents;



