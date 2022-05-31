const boton = document.querySelector ('p');

boton.addEventListener ('click', updateName);

function updateName (){
    let name = prompt('Ingresar un nuevo jugador.');
    boton.textContent = 'Player 1: ' + name;
    
}