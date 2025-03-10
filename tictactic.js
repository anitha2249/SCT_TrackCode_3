let  boxes=document.querySelectorAll(".box");
let  resetbtn=document.querySelector("#reset-btn");
let  newgamebtn=document.querySelector("#new-btn");
let  msg=document.querySelector("#msg");
let  msgcontainer=document.querySelector(".msg-container");



let turno=true ;//playerx,playero;

const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8], 
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [2,5,8]
];

const resetgame=()=>{
    turno=true;
    enbleboxes();
    msgcontainer.classList.add("hide");

}

const disableboxes =() =>{
    for (let box of boxes){
        box.disabled=true;
    }
}

const enbleboxes =() =>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const showwinner=(winner)=>{
    msg.innerText=`congulations,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
     disableboxes();
}


const checkwinner=()=>{
    for (let pattern of winpattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!=""&& pos2val !="" && pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
              
                showwinner();
            }
        }
    }
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno){
            box.innerText="o";
            turno=false;
        }
        else{
            box.innerText="x";
            turno=true;
        }
        box.disabled=true;
        checkwinner();
    })
})


newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);