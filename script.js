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

function playGame(){
  function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
      console.log("Draw");
    }
    else if (humanChoice == "rock"){
      switch (computerChoice){
        case "paper":
          console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
          givePointToComputer();
          break;
        case "scissors":
          console.log(`You won! ${humanChoice} beats ${computerChoice}.`);
          givePointToPlayer();
          break;
      }
    }
    else if (humanChoice == "paper"){
      switch (computerChoice){
        case "scissors":
          console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
          givePointToComputer();
          break;
        case "rock":
          console.log(`You won! ${humanChoice} beats ${computerChoice}.`);
          givePointToPlayer();
          break;
      }
    }
    else if (humanChoice == "scissors"){
      switch (computerChoice){
        case "rock":
          console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
          givePointToComputer();
          break;
        case "paper":
          console.log(`You won! ${humanChoice} beats ${computerChoice}.`);
          givePointToPlayer();
          break;
      }
    }
  }

  for(let i=0; i<5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if(humanScore > computerScore){
    console.log("You won the game!");
  }
  else { 
    console.log("You lose the game!");
  }
}

playGame();