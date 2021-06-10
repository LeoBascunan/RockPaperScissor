

function computerPlay() {
    let opciones = ["piedra", "papel", "tijera"];
    let EleccionRandom = opciones[Math.floor(Math.random() * opciones.length)];

    return EleccionRandom;
}


function playRound(playerSelection) {

    let computerSelection = computerPlay();

    if ((playerSelection == 'piedra' && computerSelection == 'tijera') ||
        (playerSelection == 'tijera' && computerSelection == 'papel') ||
        (playerSelection == 'papel' && computerSelection == 'piedra')) {
        alert("ganaste: " + playerSelection + " vence a " + computerSelection);
    } else if (playerSelection == computerSelection) {
        alert("empate");

    } else if ((playerSelection == 'tijera' && computerSelection == 'piedra') ||
        (playerSelection == 'papel' && computerSelection == 'tijera') ||
        (playerSelection == 'piedra' && computerSelection == 'papel')) {
        alert("perdiste: " + playerSelection + " pierde contra " + computerSelection);
    } else {
        alert(playerSelection + " no es una opción válida");
    } 
    console.log("jugador eligió = " + playerSelection + " maquina eligió = " + computerSelection);
}


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function () { playRound(button.id) })

})



// console.log(playRound(playerSelection, computerSelection));



