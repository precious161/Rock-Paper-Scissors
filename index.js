let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let computerChoiceIndex = Math.floor(Math.random() * choices.length);
  return choices[computerChoiceIndex];
}

let buttons = document.querySelectorAll(".choice");

function playRound(humanChoice, computerChoice) {
  let score;
  if (humanChoice === computerChoice) {
    score = `It's a tie`;
  } else if (
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "rock" && computerChoice === "scissors")
  ) {
    humanScore++;
    score = `You win! You: ${humanScore} - Computer ${computerScore}`;
  } else {
    computerScore++;
    score = `Computer wins Computer: ${computerScore} - You: ${humanScore}`;
  }

  return score;
}

function getHumanChoice() {
  for (let button of buttons) {
    button.addEventListener("click", () => {
      let humanChoice = button.innerText;
      humanChoice = humanChoice.toLowerCase();
      let computerChoice = getComputerChoice();
      let score = playRound(humanChoice, computerChoice);
      let scoreDiv = document.querySelector(".score");

      scoreDiv.innerText = score;
    });
  }
}
getHumanChoice();
