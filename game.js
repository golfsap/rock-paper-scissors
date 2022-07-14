console.log("Hello there, this is rock paper scissors!");

function computerPlay() {
    // define array of choices
    const choices = ["Rock", "Paper", "Scissors"];

    // get random index value
    const randomIndex = Math.floor(Math.random() * choices.length);

    // get random item
    const play = choices[randomIndex];

    return play;
}

function playRound(playerSelection, computerSelection) {
    // convert playerSelection to all lowercase with first letter capital
    const playerChoice = playerSelection.charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1);

    // check if the same
    if (playerChoice === computerSelection) {
        return "It's a draw!";
    }

    // if player chooses rock
    if (playerChoice === "Rock") {
        if (computerSelection === "Scissors") {
            return "You Win! Rock beats Scissors";
        }
        else {
            return "You Lose! Paper beats Rock";
        }
    }

    // if player chooses scissors
    if (playerChoice === "Scissors") {
        if (computerSelection === "Paper") {
            return "You Win! Scissors beats Paper";
        }
        else {
            return "You Lose! Rock beats Scissors";
        }
    }
    
    // if player chooses paper
    if (playerChoice === "Paper") {
        if (computerSelection === "Rock") {
            return "You Win! Paper beats Rock";
        }
        else {
            return "You Lose! Scissors beats Paper";
        }
    }
}

const playerSelection = "scissors";
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));