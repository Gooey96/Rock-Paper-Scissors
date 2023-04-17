let choices = "";
let computerSelection = getComputerChoice();
let playerSelection = prompt("Choose between Rock, Paper or Scissors").toLowerCase();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie");
    }else {
        console.log("Hmmmmmmmm");
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