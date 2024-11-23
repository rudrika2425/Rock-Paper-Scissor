let userScore=0;
let compScore=0;
const choices =document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
let user=document.querySelector("#user-score");
let comp=document.querySelector("#comp-score");

let us=0;
let cs=0;
choices.forEach((choice)=>{
   
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
});

const playGame=(userChoice)=>{
console.log("userChoice-> ",userChoice);
//generate computer choice
//rock, paper,scissor
const options=["rock","paper","scissors"];
const id=Math.floor(Math.random() * 3);
const compChoice=options[id];
console.log("compChoice-> ",compChoice);

if(userChoice===compChoice){
    msg.innerText="Game was draw";
    msg.style.backgroundColor="rgb(127, 165, 255)";
}
else{
    let userWin=true;
    if(userChoice==="rock"){
        if(compChoice==="scissors"){
            userWin=true;
        }
        else{
            userWin=false;
        }
    }
    else if(userChoice==="paper"){
        if(compChoice==="scissors"){
            userWin=false;
        }
        else{
            userWin=true;
        }
    }
    else{
        if(compChoice==="paper"){
            userWin=true;
        }
        else{
            userWin=false;
        }
    }
    if(userWin){
        console.log("You Win");
        us++;
        user.innerText=us;
        msg.innerText="You Win";
        msg.style.backgroundColor="green";
    }
    else{
        console.log("Computer Win");
        cs++;
        comp.innerText=cs;
        msg.innerText="Computer Win";
        msg.style.backgroundColor="red";
        
    }
}


}