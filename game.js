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

    // console.log(`You chose ${playerChoice}, Computer chose ${computerSelection}`);
    logChoice(playerChoice, computerSelection);

    // check if the same
    if (playerChoice === computerSelection) {
        console.log("It's a draw!");
        return;
    }

    if (((playerChoice ===  'rock') && (computerSelection === 'scissors')) || ((playerChoice ===  'paper') && (computerSelection === 'rock')) || ((playerChoice ===  'scissors') && (computerSelection === 'paper'))) {
        console.log("You Win!");
        updateScorePlayer();
    }

    else if (((playerChoice ===  'rock') && (computerSelection === 'paper')) || ((playerChoice ===  'paper') && (computerSelection === 'scissors')) || ((playerChoice ===  'scissors') && (computerSelection === 'rock'))) {
        console.log('You Lose');
        updateScoreCom();
    }

}

function updateScorePlayer() {
    playerScore++;
    pScore.textContent = playerScore;
    if (playerScore == 5) {
        const winnerMsg = document.createElement('p');
        winnerMsg.classList.add('winner');
        winnerMsg.textContent = 'Congratulations! You won!';
        results.append(winnerMsg);
        stopGame();
    }
}

function updateScoreCom() {
    computerScore++;
    cScore.textContent = computerScore;
    if (computerScore == 5) {
        const winnerMsg = document.createElement('p');
        winnerMsg.classList.add('winner');
        winnerMsg.textContent = 'Sorry! You lost!';
        results.append(winnerMsg);
        stopGame();
    }
}

function logChoice(playerChoice, computerSelection) {
    choices.textContent = `You chose ${playerChoice}, Computer chose ${computerSelection}`;
}

function stopGame() {
    // create reset game button
    const resetBtn = document.createElement('button');
    resetBtn.classList.add('reset');
    resetBtn.textContent = 'Reset Game';
    results.appendChild(resetBtn);

    // remove event listeners for choices
    const buttons = Array.from(document.querySelectorAll('.choices button'));
    buttons.forEach(button => button.removeEventListener('click', playRound));
}

function resetGame() {
    
}

function game() {

    const buttons = Array.from(document.querySelectorAll('button'));
    buttons.forEach(button => button.addEventListener('click', playRound));

    

}


const playerContainer = document.querySelector('.player-score');
const computerContainer = document.querySelector('.computer-score');
const results = document.querySelector('.results');

// initialize starting score
let playerScore = 0;
let computerScore = 0;

const pScore = document.createElement('p');
pScore.textContent = playerScore;
playerContainer.appendChild(pScore);

const cScore = document.createElement('p');
cScore.textContent = computerScore;
computerContainer.appendChild(cScore);

const choices = document.querySelector('#choices');


// start a game
game();