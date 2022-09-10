// Rock Paper Scissors initializing
const choiceArray = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let winner = "";
let loser = "";

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
  console.log("The computer wins!");
  computerScore++;
  winner = "computer";
  loser = "player";
};

//Script IF player wins
const playerWins = () => {
  console.log("The player wins!");
  playerScore++;
  winner = "player";
  loser = "computer";
};

//Hello
let userChoice = "";
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
  //Prompt
  //Check user input valid answer
  //Check for tie
  console.log(`The player chooses ${userChoice}!`);
  let computerChoice = computerChoosing();
  if (computerChoice === userChoice) {
    console.log("It's a tie!");
    //Check all possibilities
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
  }
  console.log(playerScore, computerScore);
  if (playerScore > computerScore) {
    winner = "player";
    loser = "computer";
    return "The player wins against the computer!";
  }
  if (computerScore > playerScore) {
    winner = "computer";
    loser = "player";
    return "The computer wins against the player!";
  } else return "The game is a tie, try again!";
};
//Determine winner

const options = document.getElementsByClassName("option");
const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const scissors = document.getElementById("Scissors");

const handleSubmit = () => {
  game();
  winLog.textContent = `The ${winner} wins and the ${loser} loses!`;
  scoreBoard.textContent = `The player's score is ${playerScore} and the computer's score is ${computerScore}.`;
};

const submitButton = document.getElementById("submit-button");

//Add round counter & round limit to declare winner on
//Add changing <p> so the game doesn't have to be played from the console.
