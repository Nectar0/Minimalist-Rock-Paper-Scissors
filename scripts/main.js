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

// Recieve input from user
// Using randomized answer from computer
// Determine winner and adjust score up, loop for a game of five
const game = () => {
  for (i = 0; i < 5; i++) {
    let userChoice = prompt("Please enter Rock, Paper, or Scissors!");
    if (
      userChoice === "Rock" ||
      userChoice === "Paper" ||
      userChoice === "Scissors"
    ) {
      console.log(`The player chooses ${userChoice}!`);
      let computerChoice = computerChoosing();
      if (computerChoice === userChoice) {
        console.log("It's a tie!");
      } else if (userChoice === "Rock") {
        if (computerChoice === "Paper") {
          console.log("The computer wins!");
          computerScore++;
        }
        if (computerChoice === "Scissors") {
          console.log("The player wins!");
          playerScore++;
        }
      } else if (userChoice === "Paper") {
        if (computerChoice === "Rock") {
          console.log("The computer wins!");
          computerScore++;
        }
        if (computerChoice === "Scissors") {
          console.log("The computer wins!");
          computerScore++;
        }
      } else if (userChoice === "Scissors") {
        if (computerChoice === "Rock") {
          console.log("The computer wins!");
          computerScore++;
        }
        if (computerChoice === "Paper") {
          console.log("The player wins!");
          playerScore++;
        }
      }
      console.log(playerScore, computerScore);
    }
  }
  if (playerScore > computerScore) {
    return "The player wins againt the computer!";
  }
  if (computerScore > playerScore) {
    return "The computer wins against the player!";
  } else return "The game is a tie, try again!";
};

// Log game result to console
console.log(game());
