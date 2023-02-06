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
  if (computerChoice === 'Rock') {
    result = 'It is a draw!'
  } else if (computerChoice === 'Paper') {
    result = 'You lose!'
  } else if (computerChoice === 'Scissors') {
    result = 'You win!!!'
  }
  resultDisplay.textContent = result;
})

const playScissors = scissorsBtn.addEventListener('click', () => {
    let result;
    if (computerChoice === 'Scissors') {
      result = 'It is a draw!'
    } else if (computerChoice === 'Rock') {
      result = 'You lose!'
    } else if (computerChoice === 'Paper') {
      result = 'You win!!!'
    }
    resultDisplay.textContent = result;
  })

  const playPaper = paperBtn.addEventListener('click', () => {
    let result;
    if (computerChoice === 'Paper') {
      result = 'It is a draw!'
    } else if (computerChoice === 'Scissors') {
      result = 'You lose!'
    } else if (computerChoice === 'Rock') {
      result = 'You win!!!'
    }
    resultDisplay.textContent = result;
  })


