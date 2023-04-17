let choices = "";
let computerSelection = getComputerChoice();

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