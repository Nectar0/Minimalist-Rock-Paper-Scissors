let userChoice = prompt("Please enter Rock, Paper, or Scissors!");
const choiceArray = ["Rock", "Paper", "Scissors"];

const computerChoosing = () => {
  let randomChoice = Math.floor(Math.random() * choiceArray.length);
  return choiceArray[randomChoice];
};
let computerChoice = computerChoosing();
console.log(computerChoice);

if (computerChoice === userChoice) {
  console.log("It's a tie!");
} else if (userChoice === "Rock") {
  if (computerChoice === "Paper") {
    console.log("The computer wins!");
  }
  if (computerChoice === "Scissors") {
    console.log("The player wins!");
  }
} else if (userChoice === "Paper") {
  if (computerChoice === "Rock") {
    console.log("The computer wins!");
  }
  if (computerChoice === "Scissors") {
    console.log("The computer wins!");
  }
} else if (userChoice === "Scissors") {
  if (computerChoice === "Rock") {
    console.log("The computer wins!");
  }
  if (computerChoice === "Paper") {
    console.log("The player wins!");
  }
}
