const options = ["piedra","papel","tijera"];    
let player_wins = 0;
let computer_wins = 0;

function getComputerChoice(){
    let select = Math.floor(Math.random() * (options.length));
    return options[select];
}

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

function Game(){
    for (let i=0; i<5; i++) {
        let selection = prompt("piedra, papel o tijera?");
        alert(playRound(selection,getComputerChoice()))
    }
    if(player_wins>computer_wins) alert("has ganado la partida al mejor de 5");
    else if(player_wins<computer_wins) alert("has perdido la partida");
    else alert("es un empate");
    player_wins = 0;
    computer_wins = 0;
}

while(true)
    Game();
