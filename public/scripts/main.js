// Rock Paper Scissors initializing
const choiceArray = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let winner = "";
let loser = "";
const submitButton = document.getElementById("submit-button");
const winLog = document.getElementById("winLog");
const scoreBoard = document.getElementById("scoreBoard");
const head = document.getElementById("head");
const submit = document.getElementById("submit-button");
submit.addEventListener("click", function onClick(event) {
  document.body.style.backgroundColor = "";
});

const endGame = () => {
  const findWinner = () => {
    if (playerScore > computerScore) {
      return "Player";
    } else return "Computer";
  };
  let winner = findWinner();
  head.textContent = `The winner of the game is... the ${winner}!!!`;
  winLog.textContent = "Click reset to start a new game!";
};

// Computer randomizing answer
const computerChoosing = () => {
  let randomChoice = Math.floor(Math.random() * choiceArray.length);
  return choiceArray[randomChoice];
};

//Script IF computer wins
const computerWins = () => {
  computerScore++;
  winner = "computer";
  loser = "player";
};

const tieGame = () => {
  winLog.textContent = "The round is a tie!";
  scoreBoard.textContent = "~";
  choiceLog.textContent = `The computer also chose ${userChoice}.`;
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
const game = () => {
  let computerChoice = computerChoosing();
  const changeText = () => {
    winLog.textContent = `The ${winner} wins and the ${loser} loses!`;
    scoreBoard.textContent = `The player's score is ${playerScore} and the computer's score is ${computerScore}.`;
    choiceLog.textContent = `The player chooses ${userChoice} and the computer chooses ${computerChoice}.`;
  };
  //Check all possibilities
  if (userChoice === computerChoice) {
    tieGame();
  } else if (userChoice === "Rock") {
    if (computerChoice === "Paper") {
      computerWins();
      changeText();
    }
    if (computerChoice === "Scissors") {
      playerWins();
      changeText();
    }
  } else if (userChoice === "Paper") {
    if (computerChoice === "Rock") {
      playerWins();
      changeText();
    }
    if (computerChoice === "Scissors") {
      computerWins();
      changeText();
    }
  } else if (userChoice === "Scissors") {
    if (computerChoice === "Rock") {
      computerWins();
      changeText();
    }
    if (computerChoice === "Paper") {
      playerWins();
      changeText();
    }
  }
  if (computerScore + playerScore === 5) {
    endGame();
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

const resetGame = () => {
  playerScore = 0;
  computerScore = 0;
  winner = "";
  loser = "";
  choiceLog.textContent = "~";
  winLog.textContent = "~";
  scoreBoard.textContent = "~";
  head.textContent = "";
};
