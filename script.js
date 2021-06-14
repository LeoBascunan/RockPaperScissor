playerScore = 0;
computerScore = 0;
const buttons = document.querySelectorAll('button');

function computerPlay() {
    let opciones = ["piedra", "papel", "tijera"];
    let EleccionRandom = opciones[Math.floor(Math.random() * opciones.length)];

    return EleccionRandom;
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound(playerSelection) {

    let computerSelection = computerPlay();
    let result = "";

    if ((playerSelection == 'piedra' && computerSelection == 'tijera') ||
        (playerSelection == 'tijera' && computerSelection == 'papel') ||
        (playerSelection == 'papel' && computerSelection == 'piedra')) {

        playerScore += 1;
        result = ("ganaste: " + playerSelection + " vence a " + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
        if (playerScore == 5) {
            result += '<br><br>Ganaste el juego! recarga la pagina para jugar denuevo'
            disableButtons()
        };
                ;
    } else if (playerSelection == computerSelection) {
        result = ("empate. ambos eligieron " + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore);
            

    } else if ((playerSelection == 'tijera' && computerSelection == 'piedra') ||
        (playerSelection == 'papel' && computerSelection == 'tijera') ||
        (playerSelection == 'piedra' && computerSelection == 'papel')) {

           computerScore += 1; 
        result = ("perdiste: " + playerSelection + " pierde contra " + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore);
        if (computerScore == 5) {
            result += '<br><br>Perdiste el juego! recarga la pagina para jugar denuevo'
            disableButtons()
        };

    } else {
        result = (playerSelection + " no es una opción válida");
    }
    console.log("jugador eligió = " + playerSelection + " maquina eligió = " + computerSelection);


    document.getElementById('result').innerHTML = result;

}



buttons.forEach((button) => {
    button.addEventListener('click', function () { playRound(button.id) })

})



// console.log(playRound(playerSelection, computerSelection));


//Add a div for displaying results and change all of your console.logs into DOM methods.
//usando DOM   --  para eso usé getElementById y selecciono el id del div donde quiero que se vea
// el resultado, se debe crear una variable vacia para que cada vez q se juege 1 ronda se vea el
//resultado representado

//Display the running score, and announce a winner of the game once one player reaches 5 points.