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
        console.log("It's a draw!");
        return "Draw";
    }

    // if player chooses rock
    if (playerChoice === "Rock") {
        if (computerSelection === "Scissors") {
            console.log("You Win! Rock beats Scissors");
            return "Win";
        }
        else {
            console.log("You Lose! Paper beats Rock");
            return "Lose";
        }
    }

    // if player chooses scissors
    if (playerChoice === "Scissors") {
        if (computerSelection === "Paper") {
            console.log("You Win! Scissors beats Paper");
            return "Win";
        }
        else {
            console.log("You Lose! Rock beats Scissors");
            return "Lose";
        }
    }
    
    // if player chooses paper
    if (playerChoice === "Paper") {
        if (computerSelection === "Rock") {
            console.log("You Win! Paper beats Rock");
            return "Win";
        }
        else {
            console.log("You Lose! Scissors beats Paper");
            return "Lose";
        }
    }
}

function updateScore(winOrLose) {
    // player score +1 if win, computer score +1 if lose, +1 both if draw
    if (winOrLose === "Win") {
        playerScore++;
    }
    else if (winOrLose === "Lose") {
        computerScore++;
    }
    else {
        playerScore++;
        computerScore++;
    }
}

function game() {
    
    // play 5 rounds in each game
    for (let i = 0; i < 5; i++) {

        // ask player for selection each round
        let playerSelection = prompt("Rock, paper or scissors?");

        // input player selection vs random computer selection
        const computerSelection = computerPlay();
        const roundResult = playRound(playerSelection, computerSelection);

        // keep count of score
        updateScore(roundResult);

        // print current score
        console.log(`Player score: ${playerScore}, Computer score ${computerScore}`);

    }

    // output winner of the game
    if (playerScore > computerScore) {
        console.log("You win the game!");
    }
    else if (playerScore < computerScore) {
        console.log("You lost the game :(");
    }
    else {
        console.log("It's a tie! :O");
    }
}

// initialize starting score
let playerScore = 0;
let computerScore = 0;

// start a game
game();