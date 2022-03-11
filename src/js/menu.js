let menu = document.getElementById('menu');
let cerrar = document.getElementById('close');
let navlist = document.getElementById('navlist');

function abrir() {
    navlist.classList.toggle('-translate-y-[100rem]');
    cerrar.classList.toggle('-translate-y-[100rem]');
};

menu.addEventListener('click', abrir);
cerrar.addEventListener('click', abrir);