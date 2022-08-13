// Rock Paper Scissors initializing
const choiceArray = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

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
};

//Script IF player wins
const playerWins = () => {
  console.log("The player wins!");
  playerScore++;
};

// Receive input from user
// Using randomized answer from computer
// Determine winner and adjust score up, loop for a game of five
const game = () => {
  for (let i = 0; i < 5; i++) {
    //Prompt
    let userChoice = prompt("Please enter Rock, Paper, or Scissors!");
    //Check user input valid answer
    if (
      userChoice === "Rock" ||
      userChoice === "Paper" ||
      userChoice === "Scissors"
    ) {
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
    } else console.log("Try something else!");
  }
  //Determine winner
  if (playerScore > computerScore) {
    return "The player wins against the computer!";
  }
  if (computerScore > playerScore) {
    return "The computer wins against the player!";
  } else return "The game is a tie, try again!";
};

//Play game in console; temp;
console.log(game());
