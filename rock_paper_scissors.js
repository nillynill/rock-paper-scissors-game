console.log("WELCOME TO ROCK-PAPER-SCISSORS GAME IN JAVASCRIPT CONSOLE");

let HUMAN_SCORE = 0;
let COMPUTER_SCORE = 0;

  
  //Create a function for prompting human player's choice.
  
function getHumanChoice() {

    const HUMAN_CHOICE = prompt("What is your choice? ROCK, PAPER or SCISSORS?").toUpperCase();
    console.log (HUMAN_CHOICE);
    return HUMAN_CHOICE;
}

//Create a function for randomly assigning ROCK, PAPER or SCISSORS to the computer(CPU).

function getComputerChoice() {
  let RANDOM = Math.random();
  console.log (RANDOM);

let COMPUTER_CHOICE;

  if (RANDOM<=0.33){
      COMPUTER_CHOICE = "ROCK";
  }
  else if (RANDOM>0.33 && RANDOM <=0.66){
      COMPUTER_CHOICE = "PAPER";
  }
  else{
      COMPUTER_CHOICE = "SCISSORS";
  }
  
  console.log(COMPUTER_CHOICE);
  return COMPUTER_CHOICE;
  }
  
  

  function playGame(){
  
     const NUMBER_OF_ROUNDS = 5
     for (let i = 1; i <= NUMBER_OF_ROUNDS; i++) {
      console.log(`ROUND NUMBER ${i}`);
    

    function playRound(HUMAN_CHOICE, COMPUTER_CHOICE) { //Create a function for simulating one round of play.
      if (COMPUTER_CHOICE === "ROCK" && HUMAN_CHOICE === "PAPER" ||
        COMPUTER_CHOICE === "PAPER" && HUMAN_CHOICE === "SCISSORS" ||
        COMPUTER_CHOICE === "SCISSORS" && HUMAN_CHOICE === "ROCK") { // Win Conditions
            HUMAN_SCORE++;
            console.log(`You won this round! Your ${HUMAN_CHOICE} beats CPU's ${COMPUTER_CHOICE}.`);

      } else if (COMPUTER_CHOICE === HUMAN_CHOICE) { // Tie Condition
            console.log(`You tied this round! You and the CPU chose ${HUMAN_CHOICE}.`);

      } else if (
        COMPUTER_CHOICE === "PAPER" && HUMAN_CHOICE === "ROCK" ||
        COMPUTER_CHOICE === "SCISSORS" && HUMAN_CHOICE === "PAPER" ||
        COMPUTER_CHOICE === "ROCK" && HUMAN_CHOICE === "SCISSORS"){ // Lose Conditions
            COMPUTER_SCORE++;
            console.log(`You lost this round! CPU's ${COMPUTER_CHOICE} beats your ${HUMAN_CHOICE}.`);

      } else { // Invalid Entry Conditions (for type errors or empty input)
            COMPUTER_SCORE++;
            console.log(`Invalid entry! You lost this round!.`);
      }
  
    }
  
      const HUMAN_CHOICE = getHumanChoice();
      const COMPUTER_CHOICE = getComputerChoice();
      playRound(HUMAN_CHOICE, COMPUTER_CHOICE);

      console.log("CURRENT SCORE:");
      console.log(`YOU: ${HUMAN_SCORE}`);
      console.log(`CPU: ${COMPUTER_SCORE}`);
  }
}

  playGame();


  console.log("FINAL SCORE:");
  console.log(`YOU: ${HUMAN_SCORE}`);
  console.log(`CPU: ${COMPUTER_SCORE}`);