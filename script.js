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

console.log(getComputerChoice());
console.log(getHumanChoice());