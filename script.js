let humanScore = 0;
let computerScore = 0;

function getRandomInt(max){
  return Math.floor(Math.random() * max);
}

function getComputerChoice(){
  let randomValue = getRandomInt(3);
  if (randomValue == 0){
    return "rock";
  }
  else if (randomValue == 1){
    return "paper";
  }
  else return "scissors";
}

function getHumanChoice(){
  let userInput = parseInt(prompt(console.log("Enter the value of your choice:\n(1) Rock\n(2) Paper\n(3) Scissors ")));
  switch (userInput){
    case 1: 
      return "rock";
      break;
    case 2: 
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
    default:
      console.log("Hmm, something got wrong. Try again")
      return getHumanChoice();
  }
}

function givePointToPlayer(){
  humanScore++;
}

function givePointToComputer(){
  computerScore++;
}

function resetScores(){
  humanScore = 0;
  computerScore = 0;
}

function playRound(humanChoice, computerChoice){
  if (humanChoice == computerChoice){
    console.log("Draw");
  }
  else if (humanChoice == "rock"){
    switch (computerChoice){
      case "paper":
        break;
      case "scissors":
        break;
    }
  }
  else if (humanChoice == "paper"){
    switch (computerChoice){
      case "scissors":
        break;
      case "rock":
        break;
    }
  }
  else if (humanChoice == "scissors"){
    switch (computerChoice){
      case "rock":
        break;
      case "paper":
        break;
    }
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(getComputerChoice());
console.log(getHumanChoice());