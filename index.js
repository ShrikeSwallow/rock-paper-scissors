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

const humanChoice = document.querySelector("#choices");
const results = document.querySelector("#results");
const rounds = document.querySelector("#rounds");

humanChoice.addEventListener("click", (event) => {
  const choice = getHumanChoice(event);
  console.log(choice);
  if (choice !== null) {
    playGame(choice, getComputerChoice());
  }
});

const getHumanChoice = (event) => {
  let target = event.target;
  switch (target.id) {
    case "rock":
      return "rock";
    case "paper":
      return "paper";
    case "scissors":
      return "scissors";
    default:
      return alert("Pick one of the options");
  }
};

let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
  const result = document.createElement("li");
  if (humanChoice === computerChoice) {
    result.textContent = `You tied! Play next round, current score: ${humanScore} - ${computerScore}`;
    rounds.appendChild(result);
  }
  switch (humanChoice) {
    case "paper":
      if (computerChoice === "scissors") {
        result.textContent = `You lost this round! ${computerChoice} beats ${humanChoice}`;
        rounds.appendChild(result);
        computerScore += 1;
        break;
      } else {
        result.textContent = `You won this round! ${humanChoice} beats ${computerChoice}`;
        rounds.appendChild(result);
        humanScore += 1;
        break;
      }
    case "rock":
      if (computerChoice === "paper") {
        result.textContent = `You lost this round! ${computerChoice} beats ${humanChoice}`;
        rounds.appendChild(result);
        computerScore += 1;
        break;
      } else {
        result.textContent = `You won this round! ${humanChoice} beats ${computerChoice}`;
        rounds.appendChild(result);
        humanScore += 1;
        break;
      }
    case "scissors":
      if (computerChoice === "rock") {
        result.textContent = `You lost this round! ${computerChoice} beats ${humanChoice}`;
        rounds.appendChild(result);
        computerScore += 1;
        break;
      } else {
        result.textContent = `You won this round! ${humanChoice} beats ${computerChoice}`;
        rounds.appendChild(result);
        humanScore += 1;
        break;
      }
  }
};

const playGame = (humanChoice, computerChoice) => {
  const intro = document.createElement("li");
  const win = `Congratulations! You won the game. The final score was 3 - ${computerScore}`;
  const loss = `Sorry, computer got the best of you this time. The final score was: 3 - ${humanScore}`;
  intro.textContent = `The current score is: Human ${humanScore} - ${computerScore}`;
  rounds.appendChild(intro);
  playRound(humanChoice, computerChoice);
  if (humanScore === 3) {
    alert(win);
    window.location.reload();
  } else if (computerScore === 3) {
    alert(loss);
    window.location.reload();
  }
};
