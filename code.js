const computerChoice = getComputerChoice();
const rockBtn = document.querySelector('.rock')
const scissorsBtn = document.querySelector('.scissors')
const paperBtn = document.querySelector('.paper')
const resultDisplay = document.querySelector('.result')

function getComputerChoice() {
    let randomNumber = Math.floor((Math.random() * 3) + 1);
  
    if (randomNumber === 1) {
      return 'Rock'
    } else if (randomNumber === 2) {
      return 'Paper'
    } else if (randomNumber === 3) {
      return 'Scissors'
    }
  }

const playRock = rockBtn.addEventListener('click', () => {
  let result;
  if (getComputerChoice() === 'Rock') {
    result = 'It is a draw!'
  } else if (getComputerChoice() === 'Paper') {
    result = 'You lose!'
  } else if (getComputerChoice() === 'Scissors') {
    result = 'You win!!!'
  }
  resultDisplay.textContent = result;
})

const playScissors = scissorsBtn.addEventListener('click', () => {
    let result;
    if (getComputerChoice() === 'Scissors') {
      result = 'It is a draw!'
    } else if (getComputerChoice() === 'Rock') {
      result = 'You lose!'
    } else if (getComputerChoice() === 'Paper') {
      result = 'You win!!!'
    }
    resultDisplay.textContent = result;
  })

  const playPaper = paperBtn.addEventListener('click', () => {
    let result;
    if (getComputerChoice() === 'Paper') {
      result = 'It is a draw!'
    } else if (getComputerChoice() === 'Scissors') {
      result = 'You lose!'
    } else if (getComputerChoice() === 'Rock') {
      result = 'You win!!!'
    }
    resultDisplay.textContent = result;
  })


