function getComputerChoice() {
    // set array of choices
    const options = ['Rock', 'Paper', 'Scissors'];
    // get random index for computer choice
    const computerChoice = options[Math.floor(Math.random()*options.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    // change to lowercase
    const myChoice = playerSelection.toLowerCase();
    const enemyChoice = computerSelection.toLowerCase();

    // define object if move is strong or weak against another
    const weapons = {
        rock: {weakTo: 'paper', strongTo: 'scissors'},
        paper: {weakTo: 'scissors', strongTo: 'rock'},
        scissors: {weakTo: 'rock', strongTo: 'paper'}
    }

    if (weapons[myChoice].strongTo === enemyChoice) {
        playerScore++;
        console.log(`You Win! ${myChoice} beats ${enemyChoice}`);
        roundWinner = "player";
    }
    else if (weapons[myChoice].weakTo === enemyChoice) {
        computerScore++;
        console.log(`You Lost! ${myChoice} is beaten by ${enemyChoice}`);
        roundWinner =  'computer';
    }
    else {
        console.log(`It's a Tie! ${myChoice} ties ${enemyChoice}`);
        roundWinner = 'tie';
    }

    updateScoreMsg(roundWinner, playerSelection, computerSelection);
    updateSigns(playerSelection, computerSelection);
}

function isGameOver() {
    if (playerScore === 5 || computerScore === 5) {
        return true;
    }
}

function printWinner() {
    if (playerScore === 5) {
        scoreInfo.innerText = "You won the game! :)";
        console.log("You Won the game!");
    }
    else {
        scoreInfo.innerText = "You lost the game! :(";
        console.log("You lost the game!");
    }
}

function game() {
    while (isGameOver() !== true) {
        let playerSelection = prompt("What is your choice?");
        playRound(playerSelection, getComputerChoice());
        console.log(`Player score: ${playerScore} Computer score: ${computerScore}`);
    }
    printWinner();
}

// initialize starting score
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

// UI elements

const playerScoreUI = document.getElementById("player-score");
const computerScoreUI = document.getElementById("computer-score");
const scoreInfo = document.getElementById("scoreInfo");
const scoreMsg = document.getElementById("scoreMsg");
const playerSign = document.getElementById("player-sign");
const computerSign = document.getElementById("computer-sign");


function handleClick(playerSelection) {
    if (isGameOver() === true) {
        printWinner();
        return
    }

    playRound(playerSelection, getComputerChoice());
    console.log(`Player score: ${playerScore} Computer score: ${computerScore}`);
    updateScore();

    if (isGameOver() === true) {
        printWinner();
        resetGame();
    }
}

function updateScore() {
    playerScoreUI.innerText = `Player: ${playerScore}`;
    computerScoreUI.innerText = `Computer: ${computerScore}`;
    if (roundWinner === "player") {
        scoreInfo.innerText = "You Win!";
    }
    else if (roundWinner === "computer") {
        scoreInfo.innerText = "You Lost!";
    }
    else {
        scoreInfo.innerText = "It's a Tie!";
    }
}

function updateScoreMsg(winner, playerSelection, computerSelection) {
    if (winner === 'player') {
        scoreMsg.innerText = `${playerSelection} beats ${computerSelection}`;
    }
    else if (winner === 'computer') {
        scoreMsg.innerText = `${playerSelection} is beaten by ${computerSelection}`;
    }
    else {
        scoreMsg.innerText = `${playerSelection} ties ${computerSelection}`;
    }
}

function updateSigns(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "Rock": 
            playerSign.innerText = "✊";
            break;
        case "Paper":
            playerSign.innerText = "🖐️";
            break;
        case "Scissors":
            playerSign.innerText = "✌️";
            break;
    }

    switch (computerSelection) {
        case "Rock": 
            computerSign.innerText = "✊";
            break;
        case "Paper":
            computerSign.innerText = "🖐️";
            break;
        case "Scissors":
            computerSign.innerText = "✌️";
            break;
    }
}

function resetGame() {
    const resetBtn = document.createElement("button");
    resetBtn.innerText = "Reset Game";
    document.body.append(resetBtn);
}

// UI
const weapons = document.querySelectorAll('button');
weapons.forEach(weapon => {
    weapon.addEventListener('click', (e) => {
        //handleClick(weapon.className);
        handleClick(weapon.id);
    })
});

/*
let playerScoreUI = document.querySelector(".player-score");
console.log(playerScoreUI.innerText);
playerScoreUI.innerText = "Player: " + playerScore;
*/