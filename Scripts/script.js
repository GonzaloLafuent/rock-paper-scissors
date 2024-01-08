const btn_options = document.querySelectorAll(".option");
const conteiner = document.querySelector(".conteiner");
const op_image = document.querySelector(".img-player-option");
const op_computer_image = document.querySelector(".img-computer-option");
const btn_jugar = document.querySelector(".play")
const text_winner = document.querySelector(".ganador");

let click = 0;
let func = "";
let option_player = "";

function mouseover_motion(e){
    if(e.target.textContent==="PIEDRA")
        op_image.setAttribute("src","Images/piedra.png");
    else if(e.target.textContent=="PAPEL")
        op_image.setAttribute("src","Images/papel.png");
    else if(e.target.textContent=="TIJERA")
        op_image.setAttribute("src","Images/tijera.png");
}

function add_mouseover_motion(){
    btn_options.forEach(op => {
        op.addEventListener("mouseover",mouseover_motion)
    }); 
}   

function mouseout_motion(){
    op_image.setAttribute("src","../Images/pregunta.png");
}

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

function jugar(){
    btn_jugar.addEventListener("click",()=>{
        if(click==1){
            computer_op = getComputerChoice();
            op_computer_image.setAttribute("src","Images/"+computer_op+".png");
            text_winner.textContent = playRound(option_player,computer_op);
            setTimeout(() => {
                text_winner.textContent = "";
                op_computer_image.setAttribute("src","../Images/pregunta.png");
            }, 3000); 
        }
    });

}


add_mouseover_motion();
add_mouseout_motion();
add_click_motion()
jugar();

