console.log("Hello there, this is rock paper scissors!");

function computerPlay() {
    // define array of choices
    const choices = ["rock", "paper", "scissors"];

    // get random index value
    const randomIndex = Math.floor(Math.random() * choices.length);

    // get random item
    const play = choices[randomIndex];

    return play;
}

function playRound(e) {
    const playerChoice = this.classList.value;
    const computerSelection = computerPlay();

    console.log(`You chose ${playerChoice}`);
    console.log(`Computer chose ${computerSelection}`);

    // check if the same
    if (playerChoice === computerSelection) {
        console.log("It's a draw!");
        return "Draw";
    }

    // if player chooses rock
    if (playerChoice === "rock") {
        if (computerSelection === "scissors") {
            console.log("You Win! Rock beats Scissors");
            return "Win";
        }
        else {
            console.log("You Lose! Paper beats Rock");
            return "Lose";
        }
    }

    // if player chooses scissors
    if (playerChoice === "scissors") {
        if (computerSelection === "paper") {
            console.log("You Win! Scissors beats Paper");
            return "Win";
        }
        else {
            console.log("You Lose! Rock beats Scissors");
            return "Lose";
        }
    }
    
    // if player chooses paper
    if (playerChoice === "paper") {
        if (computerSelection === "rock") {
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
    // player score +1 if win, computer score +1 if lose, nothing if draw
    if (winOrLose === "Win") {
        playerScore++;
    }
    else if (winOrLose === "Lose") {
        computerScore++;
    }
    else {
        return;
    }
}

function game() {

    const buttons = Array.from(document.querySelectorAll('button'));
    buttons.forEach(button => button.addEventListener('click', playRound));

//     // input player selection vs random computer selection
//     const roundResult = playRound(playerSelection, computerSelection);

//     // keep count of score
//     updateScore(roundResult);

//     // print current score
//     console.log(`Player score: ${playerScore}, Computer score ${computerScore}`);



//     // output winner of the game
//     if (playerScore > computerScore) {
//         console.log("You win the game!");
//     }
//     else if (playerScore < computerScore) {
//         console.log("You lost the game :(");
//     }
//     else {
//         console.log("It's a tie! :O");
//     }
}


const playerContainer = document.querySelector('.player-score');
const computerContainer = document.querySelector('.computer-score');

// initialize starting score
let playerScore = 0;
let computerScore = 0;

const pScore = document.createElement('p');
pScore.textContent = playerScore;
playerContainer.appendChild(pScore);

const cScore = document.createElement('p');
cScore.textContent = computerScore;
computerContainer.appendChild(cScore);
// start a game
game();