const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let amount_of_ties = 0;

//Function that get computer choices
function getComputerChoices() {
    const option = ["rock", "paper", "scissors"];
    return option[Math.floor(Math.random() * option.length)];
}

//Function that disable the button.
function disableButton() {
    buttons.forEach(elem => {
        elem.disabled = true;
    })
}

//Function that play rock, paper, scissors and tell who the winner is
function playRound(playerSelection) {
    let computerSelection = getComputerChoices();
    let result = "";
    let plaScore = "";
    let comScore = "";
    let displayRounds = "";
    let ties = "";
    let player = "";
    let computer = "";
    let announcement = "";
    let reload = "";

    if(playerSelection === computerSelection) {
        result = `It's a tie, Both of you choose ${playerSelection}.`;
        rounds++
        amount_of_ties++
        displayRounds = `Round ${rounds}! Fight.`;
    }
    else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        result = `You win! ${playerSelection} beats ${computerSelection}.`;
        playerScore++
        rounds++
        displayRounds = `Round ${rounds}! Fight.`
        if(playerScore === 5) {
            disableButton();
            announcement = "The Player is the Winner"
            document.querySelector('h3').textContent = announcement;
            reload = "Reload the page to Rematch";
            document.querySelector('.reload').textContent = reload;
        }
    }
    else {
        result = `You lose! ${computerSelection} beats ${playerSelection}.`;
        computerScore++
        rounds++
        displayRounds = `Round ${rounds}! Fight.`;
        if(computerScore === 5) {
            disableButton();
            announcement = "The Computer is the Winner"
            document.querySelector('h3').textContent = announcement;
            reload = "Reload the page to Rematch";
            document.querySelector('.reload').textContent = reload;
        }
    }
    player = `The Player have Choose: ${playerSelection}`;
    computer = `The Computer have Choose: ${computerSelection}`
    plaScore = `The Player Scores is: ${playerScore}`;
    comScore = `The Computer Scores is: ${computerScore}`;
    ties = `Ties: ${amount_of_ties}`;

    document.querySelector('.player').textContent = player;
    document.querySelector('.computer').textContent = computer;
    document.querySelector('.tie').textContent = ties;
    document.querySelector('#result').textContent = result;
    document.querySelector('.rounds').textContent = displayRounds;
    document.querySelector('.plaScore').textContent = plaScore;
    document.querySelector('.comScore').textContent = comScore;
    console.log(player);
    console.log(computer);
    console.log(result);
}

//Putting eventListener on every button and getting their text to use for the playerSelection variable.
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        playRound(e.target.innerText);
    })
})
