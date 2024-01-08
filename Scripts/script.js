const btn_options = document.querySelectorAll(".option");
const conteiner = document.querySelector(".conteiner");
const op_image = document.querySelector(".img-option");
let click = 0;
let func = "";

function mouseover_motion(e){
    if(e.target.textContent==="rock")
        op_image.setAttribute("src","Images/roca.png");
    else if(e.target.textContent=="paper")
        op_image.setAttribute("src","Images/papel.png");
    else if(e.target.textContent=="scissors")
        op_image.setAttribute("src","Images/tijeras.png");
}

function add_mouseover_motion(){
    btn_options.forEach(op => {
        op.addEventListener("mouseover",mouseover_motion)
    }); 
}   

function mouseout_motion(){
    op_image.setAttribute("src","");
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
                e.target.setAttribute("style","background: green");
                e.target.removeEventListener("mouseout",mouseout_motion);
                btn_options.forEach(btn=> {
                    if(e.target.textContent!==btn.textContent){
                        btn.setAttribute("disabled","");
                        btn.removeEventListener("mouseover",mouseover_motion);
                        btn.removeEventListener("mouseout",mouseout_motion);
                    }    
                });
            }  
        }); 
    });
}


add_mouseover_motion();
add_mouseout_motion();
add_click_motion();