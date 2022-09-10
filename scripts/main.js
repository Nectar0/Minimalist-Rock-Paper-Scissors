// Rock Paper Scissors initializing
const choiceArray = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let winner = "";
let loser = "";
const submitButton = document.getElementById("submit-button");
const winLog = document.getElementById("winLog");
const scoreBoard = document.getElementById("scoreBoard");

// Computer randomizing answer
const computerChoosing = () => {
  let randomChoice = Math.floor(Math.random() * choiceArray.length);
  console.log(`The computer chooses ${choiceArray[randomChoice]}!`);
  return choiceArray[randomChoice];
};

//Script IF computer wins
const computerWins = () => {
  computerScore++;
  winner = "computer";
  loser = "player";
};

const tieGame = () => {
  winLog.textContent = "The game is a tie!";
  scoreBoard.textContent = "~";
  choiceLog.textContent = "~";
};

//Script IF player wins
const playerWins = () => {
  playerScore++;
  winner = "player";
  loser = "computer";
};

//Hello
let userChoice;
const userSelectRock = () => {
  userChoice = "Rock";
};
const userSelectPaper = () => {
  userChoice = "Paper";
};
const userSelectScissors = () => {
  userChoice = "Scissors";
};

// Receive input from user
// Using randomized answer from computer
// Determine winner and adjust score up, loop for a game of five
const game = () => {
  let computerChoice = computerChoosing();
  //Check all possibilities
  if (userChoice === computerChoice) {
    tieGame();
  } else if (userChoice === "Rock") {
    if (computerChoice === "Paper") {
      computerWins();
    }
    if (computerChoice === "Scissors") {
      playerWins();
    }
  } else if (userChoice === "Paper") {
    if (computerChoice === "Rock") {
      playerWins();
    }
    if (computerChoice === "Scissors") {
      computerWins();
    }
  } else if (userChoice === "Scissors") {
    if (computerChoice === "Rock") {
      computerWins();
    }
    if (computerChoice === "Paper") {
      playerWins();
    }
    winLog.textContent = `The ${winner} wins and the ${loser} loses!`;
    scoreBoard.textContent = `The player's score is ${playerScore} and the computer's score is ${computerScore}.`;
    choiceLog.textContent = `The player chooses ${userChoice} and the computer chooses ${computerChoice}.`;
  }
};

//Determine winner
const choiceLog = document.getElementById("choiceLog");
const options = document.getElementById("option");
const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const scissors = document.getElementById("Scissors");

const handleSubmit = () => {
  game();
};

//Add round counter & round limit to declare winner on
