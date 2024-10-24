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

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    console.log("You tied! Try again.");
    return;
  }
  switch (humanChoice) {
    case "paper":
      if (computerChoice === "scissors") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
        break;
      } else {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
        break;
      }
    case "rock":
      if (computerChoice === "paper") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
        break;
      } else {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
        break;
      }
    case "scissors":
      if (computerChoice === "rock") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
        break;
      } else {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
        break;
      }
    default:
      console.log(
        `You have to choose from rock, paper or scissors. ${
          humanChoice[0].toUpperCase() + humanChoice.substring(1).toLowerCase()
        } is not an option!`
      );
      break;
  }
};

const playGame = () => {
  let isWinner = false;
  while (!isWinner) {
    console.log(`The current score is: Human ${humanScore} - ${computerScore}`);
    playRound(getHumanChoice(), getComputerChoice());
    if (humanScore === 3) {
      isWinner = true;
      console.log(
        `Congratulations! You won the game. The final score was 3 - ${computerScore}`
      );
    } else if (computerScore === 3) {
      isWinner = true;
      console.log(
        `Sorry, computer got the best of you this time. The final score was: 3 - ${humanScore}`
      );
    }
  }
};

playGame();
// console.log(getComputerChoice());
// console.log(getHumanChoice());
