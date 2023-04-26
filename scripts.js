//Function that play for a single round of rock, paper and scissors.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie");
    }else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") 
    ) {
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
    }else if(
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock") 
    ) {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    }else {
        console.log("Hey, Wrong input buddy.\nShould be between Rock, Paper and Scissors.");//Telling the player or user that their input is either wrong or misspelled.
    }
}

//Function that let the computer to randomly choose between 3 chooses.
function getComputerChoice () {
    let choices = "";//Container

    const randomChoices = (Math.floor(Math.random() * 3) + 1);

    if (randomChoices <= 1) {
       return choices = "rock";
    }else if (randomChoices <= 2) {
       return choices = "paper";
    }else if (randomChoices <= 3) {
       return choices = "scissors";
    }
}

function game() {
    console.log("Welcome");

    for(let i = 1; i <= 5; i++) {
        let computerSelection = getComputerChoice();

        //Getting the user input
        let playerSelection = prompt("Choose between Rock, Paper or Scissors").toLowerCase();

        //Logging what the computer have chose.
        console.log(`The computer choose: ${computerSelection}`);

        //Logging what the player or user have chose.
        console.log(`The player choose: ${playerSelection}`);

        //Logging the result of the match.
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();