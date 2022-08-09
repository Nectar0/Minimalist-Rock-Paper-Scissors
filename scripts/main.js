// Rock Paper Scissors initializing
const choiceArray = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

// Computer randomizing answer
const computerChoosing = () => {
  let randomChoice = Math.floor(Math.random() * choiceArray.length);
  return choiceArray[randomChoice];
};

let computerChoice = computerChoosing();
console.log(computerChoice);

// Recieve input from user
// Using randomized answer from computer
// Determine winner and adjust score up, loop for a game of five
const game = () => {
  for (i = 0; i < 5; i++) {
    let userChoice = prompt("Please enter Rock, Paper, or Scissors!");
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
  }
  // Run another game if tie is reached
  if (playerScore === computerScore) {
    game();
  } else
    return `The player's score is ${playerScore}, and the computer's score is ${computerScore}.`;
};

// Log game result to console
console.log(game());
