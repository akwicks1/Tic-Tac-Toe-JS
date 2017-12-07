const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' ||userInput ==='scissors')
  {
    return userInput;
  } else if (userInput === 'bomb'){
    console.log('GAME OVER YOU WINNN')
  }
    else {
    (console.log('Error!'));
  }
};

function getComputerChoice () {
  let compChoice = Math.floor(Math.random() * 3);
  if (compChoice === 0) {
    return 'rock';
 	} else if (compChoice === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function determineWinner (userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'TIE!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      return 'user won';
  } else {
    	return 'comp won';
  	}
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'comp won';
  } else {
    	return 'user won';
  }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'comp won';
  } else {
    	return 'user won';
    }
}
  }

  function playGame () {
    let userChoice = getUserChoice('bomb');
    let computerChoice = getComputerChoice();
    console.log('You got ' + userChoice);
    console.log('The computer got ' + computerChoice);
    console.log(determineWinner (userChoice, computerChoice));
  }

playGame()
