const option = ["rock", "paper", "scissors"]

//Function that let the computer to randomly choose between 3 chooses.
function getComputerChoice() {
    const randomChoices = option[(Math.floor(Math.random() * option.length))];
    return randomChoices;
}

//Getting the user input
function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput == false) {
        const choices = prompt("Choose between Rock, Paper or Scissors").toLowerCase();
        if(choices == null) {
            continue;
        }
        if(option.includes(choices)) {
            validatedInput = true;
            return choices
        }
    }
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie";
    }
    else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") 
    ) {
        return "player";
    }
    else  {
        return "computer";
    }
}

//Function that play for a single round of rock, paper and scissors.
function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    
    if (result === "tie") {
        return "It's a tie";
    }
    else if(result === "player") {
        return `You won! ${playerSelection} beats ${computerSelection}.`
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`
    }
}

function game() {
    console.log("Welcome");

    for(let i = 1; i <= 5; i++) {
        let computerSelection = getComputerChoice(); 
        let playerSelection = getPlayerChoice();

        console.log(`Round: ${i}, Fight!`);

        //Logging what the player have chose.
        console.log(`The player choose: ${playerSelection}`);

        //Logging what the computer or user have chose.
        console.log(`The computer choose: ${computerSelection}`);

        //Logging the result of the match.
        console.log(playRound(playerSelection, computerSelection));

        console.log("-------------------------");
    }

    console.log("Game Over");
}

game();