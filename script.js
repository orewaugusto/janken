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
  const playerScore = document.querySelector(".playerScore h3");
  playerScore.textContent = String(humanScore);
  checkWinner();
}

function givePointToComputer(){
  computerScore++;
  const pcScore = document.querySelector(".pcScore h3");
  pcScore.textContent = String(computerScore);
  checkWinner();
}

function shakeHands(humanChoice, computerChoice){
  const imageMap = {
  rock: './images/playrock.png',
  paper: './images/playpaper.png',
  scissors: './images/playscissor.png'
};

  const playerHand = document.querySelector("#playerHand");
  const computerHand = document.querySelector("#computerHand");

  playerHand.src = imageMap["rock"];
  computerHand.src = imageMap["rock"];

  // Aplica a animação de quicar nas duas mãos
  playerHand.classList.add("bounce-animation-player");
  computerHand.classList.add("bounce-animation-computer");

  // Quando a animação terminar, trocar as imagens
  setTimeout(() => {
    playerHand.src = imageMap[humanChoice];
    computerHand.src = imageMap[computerChoice];

    // Remove a classe de animação para que possa ser reaplicada futuramente
    playerHand.classList.remove("bounce-animation-player");
    computerHand.classList.remove("bounce-animation-computer");
  }, 1000); // Espera 1 segundo (tempo suficiente para a animação terminar)
}

function playGame(){
  function playRound(humanChoice, computerChoice){
    shakeHands(humanChoice, computerChoice);
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