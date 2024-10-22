const rockPaperScissor = () => {};

const getComputerChoice = () => {
  const computerChoice = Math.floor(Math.random() * 10);
  if (computerChoice < 4) {
    return "rock";
  } else if (computerChoice < 7) {
    return "paper";
  } else {
    return "scissors";
  }
};

const getHumanChoice = () => {
  let humanChoice = prompt("Paper! Rock! Scissors! Choose:").toLowerCase();
  return humanChoice;
};

let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, computerChoice) => {};

// console.log(getComputerChoice());
// console.log(getHumanChoice());
