let userScore=0;
let compScore=0;
let user=document.querySelector("#userScore");
let comp=document.querySelector("#computerScore");
const choices=document.querySelectorAll(".choice");
let msg= document.querySelector("#msg");
// generatee computer choice
const getCompChoice= ()=>{
    let options=["rock","paper","scissor"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}
const draw=()=>{
    msg.innerText="Game was Draw. Play again."
    msg.style.backgroundColor="#081b31";
}
const displayWinner= (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        msg.style.backgroundColor= "green";
        msg.innerText=`You won! ${userChoice} beats ${compChoice}`;
        user.innerText= userScore;
    }
    else{
        compScore++;
        msg.style.backgroundColor= "red";
        msg.innerText=`You lose! ${compChoice} beats ${userChoice}`;
        comp.innerText= compScore;
    }
}
const playGame= (userChoice)=>{
    let compChoice= getCompChoice();
    if(compChoice===userChoice){
        draw();
    }
    else{
        let userWin=true;
        if(compChoice ==="rock"){
            userWin=userChoice ==="scissor" ? false:true;
        }
        else if(compChoice=="paper"){
            userWin=userChoice === "rock" ? false:true;
        }
        else if(compChoice=="scissor"){
            userWin= userChoice=== "paper" ? false: true;
        }
        displayWinner(userWin, userChoice, compChoice);
    }
    
}
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        let attribute= choice.getAttribute("id");
        let userChoice=attribute;
        playGame(userChoice);
        
    })
})