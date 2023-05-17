const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;

//Function that get computer choices
function getComputerChoices() {
    const option = ["rock", "paper", "scissors"];
    return option[Math.floor(Math.random() * option.length)];
}

//Function that play rock, paper, scissors and tell who the winner is
function playRound(playerSelection) {
    let computerSelection = getComputerChoices();
    const result = document.querySelector('#result');
    const para = document.createElement('p');

    if(playerSelection === computerSelection) {
        para.textContent = `It's a tie, Both of you choose ${playerSelection}.`;
        result.appendChild(para);
        console.log(para);
    }
    else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        para.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
        result.appendChild(para);
        console.log(para);
    }
    else {
        para.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
        result.appendChild(para);
        console.log(para);
    }
}

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        playRound(e.target.innerText);
    })
})
