const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;
const result = document.getElementById('#result');
const para = document.createElement('p');

//Function that get computer choices
function getComputerChoices() {
    const option = ["rock", "paper", "scissors"];
    return option[Math.floor(Math.random() * option.length)];
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoices();

    if(playerSelection === computerSelection) {
        para.textContent = `It's a tie, Both of you choose ${playerSelection}.`;
        result.append(para);//this is wrong
        console.log(para);
    }
    else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        para.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
        result.append(para);//this is wrong
        console.log(para);
    }
    else {
        para.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
        result.append(para);//this is wrong
        console.log(para);
    }
}

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        playRound(e.target.innerText);
    })
})
