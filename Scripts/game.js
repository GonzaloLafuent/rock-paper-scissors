const options = ["piedra","papel","tijera"];    
let player_wins = 0;
let computer_wins = 0;

/*funciones del juego*/

/*computa la opcion de la computadora*/
function getComputerChoice(){
    let select = Math.floor(Math.random() * (options.length));
    return options[select];
}

/*juega una ronda entre la computadro y la seleccion de la persona*/
function playRound(playerSelection,computerSelection){
    let player_sel = playerSelection.toLowerCase().trim();
    let resultado = "";
    let msg_perdido = "Perdiste! "+computerSelection+" le gana a "+player_sel;
    let msg_ganado =  "Ganaste! "+player_sel+" le gana a "+computerSelection  
    if (player_sel===computerSelection) {
        resultado = "Hay un empate";
    } else{
        switch (player_sel) {
            case "piedra":
                resultado = computerSelection==="papel"? msg_perdido:msg_ganado;  
                break;
            case "papel":
                resultado = computerSelection==="tijera"?msg_perdido:msg_ganado;
                break;
            case "tijera":
                resultado = computerSelection==="piedra"?msg_perdido:msg_ganado;
                break;    
        }
    }
    if(msg_perdido===resultado) computer_wins++;
    else if(msg_ganado===resultado) player_wins++;
    return resultado;
}


