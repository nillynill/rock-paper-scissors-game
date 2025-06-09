console.log("WELCOME TO ROCK-PAPER-SCISSORS GAME IN JAVASCRIPT CONSOLE");

let humanScore = 0;
let computerScore = 0;

  
  //Create a function for prompting human player's choice.
  
function getHumanChoice() {

    const humanChoice = prompt("What is your choice? ROCK, PAPER or SCISSORS?").toUpperCase();
    console.log (humanChoice);
    return humanChoice;
}

//Create a function for randomly assigning ROCK, PAPER or SCISSORS to the computer(CPU).

function getComputerChoice() {
  let random = Math.random();
  console.log (random);

let computerChoice;

  if (random<=0.33){
      computerChoice = "ROCK";
  }
  else if (random>0.33 && random <=0.66){
      computerChoice = "PAPER";
  }
  else{
      computerChoice = "SCISSORS";
  }
  
  console.log(computerChoice);
  return computerChoice;
  }
  
  

  function playGame(){ //start game, play 5 rounds and declare scores
  
     const numberOfRounds = 5
     for (let i = 1; i <= numberOfRounds; i++) {
      console.log(`ROUND NUMBER ${i}`);
    

    function playRound(humanChoice, computerChoice) { //Create a function for simulating one round of play.
      if (computerChoice === "ROCK" && humanChoice === "PAPER" ||
        computerChoice === "PAPER" && humanChoice === "SCISSORS" ||
        computerChoice === "SCISSORS" && humanChoice === "ROCK") { // Win Conditions
            humanScore++;
            console.log(`You won this round! Your ${humanChoice} beats CPU's ${computerChoice}.`);

      } else if (computerChoice === humanChoice) { // Tie Condition
            console.log(`You tied this round! You and the CPU chose ${humanChoice}.`);

      } else if (
        computerChoice === "PAPER" && humanChoice === "ROCK" ||
        computerChoice === "SCISSORS" && humanChoice === "PAPER" ||
        computerChoice === "ROCK" && humanChoice === "SCISSORS"){ // Lose Conditions
            computerScore++;
            console.log(`You lost this round! CPU's ${computerChoice} beats your ${humanChoice}.`);

      } else { // Invalid Entry Conditions (for type errors or empty input)
            computerScore++;
            console.log(`Invalid entry! You lost this round!.`);
      }
  
    }
  
      const humanChoice = getHumanChoice();
      const computerChoice = getComputerChoice();
      playRound(humanChoice, computerChoice);

      console.log("CURRENT SCORE:");
      console.log(`YOU: ${humanScore}`);
      console.log(`CPU: ${computerScore}`);
  }
}

  playGame();


  console.log("FINAL SCORE:");
  console.log(`YOU: ${humanScore}`);
  console.log(`CPU: ${computerScore}`);