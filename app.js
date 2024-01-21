
let titulo = document.querySelector('.title');
titulo.innerHTML = 'Hora del desafio';

function consoleButton(){
    alert('El boton fue clicado')
}

function promptButton(){
    let ciudadDeBrasil = prompt('Ingresa el nombre de una ciudad de Brasil')
    alert(`Estuve en ${ciudadDeBrasil} y me acordé de ti`);
}

function alertButton(){
    alert('Yo amo Java Script <3')

}

function sumaButton(){
    let numeroUno = parseInt(prompt('Ingresa un numero'));
    let numeroDos = parseInt(prompt('Ingresa otro numero'));
    let resultado = numeroDos + numeroUno;
    alert(`El resultado es: ${resultado}`)
}