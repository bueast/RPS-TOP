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
    let y = document.getElementsByClassName("choice".); // This is the part I need help connecting //

    if (y = 'paper') {
        return 'player paper'
    }
    else if (y = 'scissors') {
        return 'player Scissors'
    }
    else if (y = 'rock') {
        return 'player rock'
    }
}

function playGame(playerChoice, computerChoice) {
    if (playerChoice === 'rock' && computerChoice === 'rock') {
        return 'It is a draw!'
    }
    else if (playerChoice === 'rock' && computerChoice === 'paper') {
        return 'You lose!'
    }
    else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        return 'You win!!!'
    }
    else if (playerChoice === 'paper' && computerChoice === 'paper') {
        return 'It is a draw!'
    }
    else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        return 'You lose!'
    }
    else if (playerChoice === 'paper' && computerChoice === 'rock') {
        return 'You win!!!'
    }
    else if (playerChoice === 'scissors' && computerChoice === 'scissors') {
        return 'It is a draw!'
    }
    else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        return 'You lose!'
    }
    else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        return 'You win!!!'
    }
}
