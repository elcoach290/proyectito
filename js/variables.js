let tipodecambio = 3.73;
const nombredelprofe = window.prompt('¿Cúal es tu nombre?');
//nombredelprofe = 'Sujey';
tipodecambio = 3.5;
const cabecera = document.querySelector('.header');
const cuerpo = document.querySelector('body');

cabecera.style.backgroundColor = "tomato";
//cuerpo.style.transform = "scaleX(-1)";

let mensaje = `Hola ${nombredelprofe}, el tipo de cambio de hoy es de ${tipodecambio}`;

//window.alert(mensaje);

const ofertamensaje = document.querySelector('.oferta__link');
ofertamensaje.innerHTML = mensaje;

const modal = document.querySelector('.modal');

ofertamensaje.addEventListener('click', function(){
	modal.style.display = 'block';
	modal.style.backgroundColor = this.dataset.color;
	modal.querySelector('.modal__content').innerHTML = mensaje;
})

const botonCerrarModal = modal.querySelector('.modal__btn');

botonCerrarModal.addEventListener('click', () => {
	modal.style.display = 'none';
})


