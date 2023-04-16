//Global variable for three choices
let choice1 ="rock";
let choice2 ="paper";
let choice3 ="scissors";

//Function that randomly select 3 option for the computer
function getComputerChoice() { 
    const random =(Math.floor(Math.random() * 3) + 1);

    if (random <=1) {
        return choice1;
    }else if (random <=2) {
        return choice2;
    }else {
        return choice3;
    }
}

//Getting player input
function getPlayerChoice() {
    const userInput = prompt("Choose between Rock, Paper or Scissors");

//This code is making sure that the input will become case insensitive
    const result = userInput.toLowerCase();

//This code is making sure that player give the right input
    if (result === "rock" || result === "paper" || result === "scissors") {
        return result;
    }else {
        alert("Error: Wrong choices")
    }
}

//This function is to play one round 
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie");
    }else if ("rock" === "scissors" || "scissors" === "paper" || "paper" === "rock") {
        console.log("The Player have won");
    }else if ("rock" === "paper" || "paper" === "scissors" || "scissor" === "rock") {
        console.log("The Computer have won")
    }else {
        console.log("Help it's an error")
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
