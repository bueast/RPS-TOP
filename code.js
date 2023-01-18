const computerChoice = getComputerChoice();
const playerChoice = getPlayerChoice();

function getComputerChoice() {
    let randomNumber = Math.floor((Math.random() * 3) + 1);

    if (randomNumber == 1) {
        return 'Rock'
    }
    else if (randomNumber == 2) {
        return 'paper'
    }
    else if (randomNumber == 3) {
        return 'Scissors'
    }
}

function getPlayerChoice() {
    let playerSelection = document.getElementsByClassName("choice".); // This is the part I need help connecting //

    if (playerSelection = 'paper') {
        return 'player paper'
    }
    else if (playerSelection = 'scissors') {
        return 'player Scissors'
    }
    else if (playerSelection = 'rock') {
        return 'player rock'
    }
}

function playGame(playerChoice, computerChoice) {
    if (playerChoice === 'player rock' && computerChoice === 'rock') {
        return 'It is a draw!'
    }
    else if (playerChoice === 'player rock' && computerChoice === 'paper') {
        return 'You lose!'
    }
    else if (playerChoice === 'player rock' && computerChoice === 'scissors') {
        return 'You win!!!'
    }
    else if (playerChoice === 'player paper' && computerChoice === 'paper') {
        return 'It is a draw!'
    }
    else if (playerChoice === 'player paper' && computerChoice === 'scissors') {
        return 'You lose!'
    }
    else if (playerChoice === 'player paper' && computerChoice === 'rock') {
        return 'You win!!!'
    }
    else if (playerChoice === 'player scissors' && computerChoice === 'scissors') {
        return 'It is a draw!'
    }
    else if (playerChoice === 'player scissors' && computerChoice === 'rock') {
        return 'You lose!'
    }
    else if (playerChoice === 'player scissors' && computerChoice === 'paper') {
        return 'You win!!!'
    }
}
