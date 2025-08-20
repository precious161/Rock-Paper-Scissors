function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else if (computerChoice === 2) {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Enter rock, paper, or scissors");

  return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`${humanChoice} beats ${computerChoice}`);
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    computerScore++;
    console.log(`${computerChoice} beats ${humanChoice}`);
  } else {
    console.log("Invalid Choice!");
  }

  console.log(`Score: Human - ${humanScore}, Computer - ${computerScore}`);
}

function palyGame() {
  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i}`);
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }
  console.log(" Game - Over");
  if (humanScore > computerScore) {
    console.log(`You win with ${humanScore} points`);
  } else if (computerScore > humanScore) {
    console.log(`Computer wins with ${computerScore} points`);
  } else {
    console.log(
      `It's a tie with equal ${humanScore} = ${computerScore} points`
    );
  }
}

palyGame();
