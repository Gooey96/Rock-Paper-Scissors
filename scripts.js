let choices = "";
let computerSelection = getComputerChoice();
let playerSelection = prompt("Choose between Rock, Paper or Scissors").toLowerCase();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie");
    }else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") 
    ) {
        console.log("The player have won");
    }else if(
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock") 
    ) {
        console.log("The computer have won");
    }else {
        console.log("Hmmmmmm");
    }
}

function getComputerChoice () {
    const randomChoices = (Math.floor(Math.random() * 3) + 1);

    if (randomChoices <= 1) {
       return choices = "rock";
    }else if (randomChoices <= 2) {
       return choices = "paper";
    }else if (randomChoices <= 3) {
       return choices = "scissors";
    }
}

console.log(`The computer choose: ${computerSelection}`);
console.log(`The player choose: ${playerSelection}`)
console.log(playRound(playerSelection, computerSelection));