function solicitarDatos(){
	const nombre = window.prompt("¿Cual es tu Nombre?");
	const edad = window.prompt("¿Cual es tu edad?");
	imprimirDatos(nombre, edad);
}


function imprimirDatos(dato1, dato2){
	window.alert(`Tienes un bonito nombre ${dato1} y la edad de ${dato2} es excelente`);
}

function saludar(){
	window.alert("Hola Mundo");
}

/*
saludar();
saludar();
saludar();
saludar();
saludar();
*/

//solicitarDatos();

function saludarPersonalmente(nombre){
	window.alert(`Hola ${nombre}`);
}

// saludarPersonalmente('Sujey');
// saludarPersonalmente('Melany');
// saludarPersonalmente('Christian');
// saludarPersonalmente('Alejandro');

// let sesionIniciada = false;

// if( sesionIniciada == true ){
// 	saludarPersonalmente('Sujey');
// }else{
// 	saludarPersonalmente('Alejandro');
// }

function sumar(num1, num2){
	let resultado = num1 + num2;
	return resultado;
}

const calculo1 = sumar(500,1800); // 200
const calculo2 = sumar(789,634); // 41

//window.alert(`calculo 1 = ${calculo1} y calculo 2 = ${calculo2}`);

const botoncitoSolicitadorDeDatos = document.querySelector('#botonDatos');

botoncitoSolicitadorDeDatos.addEventListener('click', ()=>{
	solicitarDatos();
})







