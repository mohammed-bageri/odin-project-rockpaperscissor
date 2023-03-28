console.log("Rock, Paper, Scissor Project");
const choices = ["rock", "paper", "scissor"];

function loseMessage(playerSelection, computerSelection) {
  return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

function winMessage(playerSelection, computerSelection) {
  return `You win! ${playerSelection} beats ${computerSelection}`;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == choices[0] && computerSelection == choices[1]) {
    return loseMessage(playerSelection, computerSelection);
  } else if (playerSelection == choices[0] && computerSelection == choices[2]) {
    return winMessage(playerSelection, computerSelection);
  } else if (playerSelection == choices[1] && computerSelection == choices[0]) {
    return winMessage(playerSelection, computerSelection);
  } else if (playerSelection == choices[1] && computerSelection == choices[2]) {
    return loseMessage(playerSelection, computerSelection);
  } else if (playerSelection == choices[2] && computerSelection == choices[0]) {
    return loseMessage(playerSelection, computerSelection);
  } else if (playerSelection == choices[2] && computerSelection == choices[1]) {
    return winMessage(playerSelection, computerSelection);
  } else {
    return "No one win! it's a draw";
  }
}

function getRandom(min, max) {
  const floatRandom = Math.random();
  const difference = max - min;
  const random = Math.round(difference * floatRandom);
  const randomWithinRange = random + min;
  return randomWithinRange;
}

function getComputerChoice() {
  const choice = getRandom(0, 2);
  return choices[choice];
}

function getPlayerChoice() {
  let choice = prompt(
    "select rock, paper, or scissor (default is rock)"
  ).toLowerCase();
  if (!choices.includes(choice)) {
    choice = choices[0];
  }
  return choice;
}

function game(round) {
  for (let i = 0; i < round; i++) {
    console.log(`Round Number ${i + 1}`);
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    console.log(playerSelection);
    console.log(playRound(playerSelection, computerSelection));
  }
}

game(5);
