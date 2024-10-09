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

function checkWinner(){
  if(humanScore == 5){
    console.log("you won!");
  }
  else if(computerScore == 5){
    console.log("you lost!");
  }
  else return;
}

function givePointToPlayer(){
  humanScore++;
  checkWinner();
}

function givePointToComputer(){
  computerScore++;
  checkWinner();
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

  const rockBtn = document.querySelector("#rock");
  const paperBtn = document.querySelector("#paper");
  const scissorBtn = document.querySelector("#scissor");

  rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
  });
  paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
  });
  scissorBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
  });

  if(humanScore > computerScore){
    console.log("You won the game!");
  }
  else { 
    console.log("You lose the game!");
  }
}

playGame(); 