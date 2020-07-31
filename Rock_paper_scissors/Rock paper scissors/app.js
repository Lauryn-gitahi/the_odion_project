let yourChoice= prompt("Enter either Rock, paper or scissors");
let userInput=yourChoice.toLowerCase();

function computerPlay(){
    let choice = ["Rock", "Paper", "Scissors"];
    let random =Math.floor(Math.random()*choice.length);
    let computerChoice=choice[random];
    return computerChoice;
        
}

let computerSelection= computerPlay();
let myScore=0;
let computerScore=0;

function playRound(playerSelection, computerSelection){
    // Rock choices
    if(yourChoice == "Rock" && computerSelection=="paper"){
        computerScore++;
        return "You lose paper beats Rock";
    }

    else if(yourChoice == "Rock" && computerSelection=="Rock"){
        return "Its a tie";
    }

    else if(yourChoice == "Rock" && computerSelection=="scissors"){
        myScore++;
        return "You win rock beats scissors";
    }

    // Paper choices
    else if(yourChoice == "Paper" && computerSelection=="rock"){
        myScore++;
        return "You win paper beats Rock";
    }

    else if(yourChoice == "Paper" && computerSelection=="scissors"){
        computerScore++;
        return "You loose scissors beats paper";
    }

    else if(yourChoice == "Paper" && computerSelection=="rock"){
        myScore++;
        return "You win paper beats Rock";
    }

    // Scissors choices
    else if(yourChoice == "scissors" && computerSelection=="rock"){
        computerScore++;
        return "You loose rock beats scissors";
    }
    else if(yourChoice == "scissors" && computerSelection=="paper"){
        myScore++;
        return "You win scissors beats paper";
    }
    else if(yourChoice == "scissors" && computerSelection=="scissors"){
        return "Its a tie";
    }

}


function game(){
    let playerScore=0;
    let compScore=0;
   

    console.log(playRound( playSelection,compSelection));
    console.log(playRound(playSelection,compSelection));
    console.log(playRound(playSelection,compSelection));
    console.log(playRound(playSelection,compSelection));
    console.log(playRound(playSelection,compSelection));

    if(playerScore > compScore){
        return("You win");
    }
    else if(playerScore < compScore){
        return ("Comp Wins");
    }
    else{
        return "its a draw";
    }
}