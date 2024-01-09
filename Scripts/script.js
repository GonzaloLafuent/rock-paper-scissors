const btn_options = document.querySelectorAll(".option");
const conteiner = document.querySelector(".conteiner");
const op_player_image = document.querySelector("#img-player-option");
const op_computer_image = document.querySelector("#img-computer-option");
const btn_jugar = document.querySelector(".play")
const text_winner = document.querySelector(".txt-winner");
const img_win = document.querySelector(".img-winner");

let click = 0;
let func = "";
let option_player = "";

/*
    agrega la imagen dentro del contener que representa la opcion del jugador
    que el jugador interactuo con el mouse
*/
function mouseover_motion(e){
    if(e.target.textContent==="PIEDRA")
        op_player_image.setAttribute("src","Images/piedra.png");
    else if(e.target.textContent=="PAPEL")
        op_player_image.setAttribute("src","Images/papel.png");
    else if(e.target.textContent=="TIJERA")
        op_player_image.setAttribute("src","Images/tijera.png");
}

/*
    añade una funcion que responde a al movmineto del mouse por arriba de
    cada boton de opcion
*/
function add_mouseover_motion(){
    btn_options.forEach(op => {
        op.addEventListener("mouseover",mouseover_motion)
    }); 
}   

/*
    eliminar la imagen dentro del contener que presenta la opcion del jugador
    cuando el mouse se corre del boton
*/
function mouseout_motion(){
    op_player_image.setAttribute("src","/Images/pregunta.png");
}


/*
    añade una funcion que responde a al movmineto del mouse por arriba de
    cada boton de opcion
*/
function add_mouseout_motion(){
    btn_options.forEach(op => {
        op.addEventListener("mouseout",mouseout_motion);         
    }); 
}
 
function add_click_motion(){
    btn_options.forEach(op => {
        op.addEventListener("click",(e)=>{
            if(click===0){
                click++;
                option_player = e.target.textContent;
                e.target.removeEventListener("mouseout",mouseout_motion);
                btn_options.forEach(btn=> {
                    if(e.target.textContent!==btn.textContent){
                        btn.setAttribute("disabled","true");
                        btn.removeEventListener("mouseover",mouseover_motion);
                        btn.removeEventListener("mouseout",mouseout_motion);
                    }    
                });
            } else{
                click--;
                e.target.setAttribute("style","background:");
                e.target.addEventListener("mouseout",mouseout_motion);
                btn_options.forEach(btn=> {
                    btn.removeAttribute("disabled");
                    if(e.target.textContent!==btn.textContent){
                        btn.addEventListener("mouseover",mouseover_motion);
                        btn.addEventListener("mouseout",mouseout_motion);
                    }    
                });
            } 
        }); 
    });
}

/*
 jugar añade el evento que responde a un click para poder jugar un partida
*/
function jugar(){
    btn_jugar.addEventListener("click",()=>{
        if(click==1){
            computer_op = getComputerChoice();
            op_computer_image.setAttribute("src","Images/"+computer_op+".png");
            text_winner.textContent = playRound(option_player,computer_op);
            if(winner==="computer"){
                img_win.setAttribute("src","/Images/perder.png");
            } else if(winner==="player"){
                img_win.setAttribute("src","/Images/ganar.png");    
            } else{
                img_win.setAttribute("src","/Images/empate.png");
            }
            setTimeout(() => {
                text_winner.textContent = "";
                op_computer_image.setAttribute("src","/Images/pregunta.png");
                img_win.setAttribute("src","");
            }, 2000); 
        }
    });

}

add_mouseover_motion();
add_mouseout_motion();
add_click_motion()
jugar();

