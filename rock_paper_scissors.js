let humanScore = 0;
let computerScore = 0;


//Create event listeners to get human player's button choice.

const rockBtn = document.querySelector(".rockBtn");
rockBtn.addEventListener("click", ()=> {
    const humanChoice = "ROCK";
    console.log(humanChoice);
    const computerChoice = getComputerChoice();
    console.log(computerChoice);
    playRound(humanChoice, computerChoice);
})

const paperBtn = document.querySelector(".paperBtn");
paperBtn.addEventListener("click", ()=> {
    const humanChoice = "PAPER";
    console.log(humanChoice);
    const computerChoice = getComputerChoice();
    console.log(computerChoice);
    playRound(humanChoice, computerChoice);
})

const scissorsBtn = document.querySelector(".scissorsBtn");
scissorsBtn.addEventListener("click", ()=> {
    const humanChoice = "SCISSORS";
    console.log(humanChoice);
    const computerChoice = getComputerChoice();
    console.log(computerChoice);
    playRound(humanChoice, computerChoice);

})

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
    return computerChoice;
    }


  
       
    function playRound(humanChoice, computerChoice) { //Create a function for simulating one round of play.

        if (computerChoice === "ROCK" && humanChoice === "PAPER" ||
          computerChoice === "PAPER" && humanChoice === "SCISSORS" ||
          computerChoice === "SCISSORS" && humanChoice === "ROCK") { // Win Conditions
              humanScore++;
              const hScore = document.querySelector(".hScore");
              hScore.innerText = `YOUR SCORE:${humanScore}`;
              const result = document.querySelector(".result");
              result.innerText = `You won this round! Your ${humanChoice} beats Computer's ${computerChoice}.`;
              if (humanScore == 5) {
                const winner = document.querySelector(".winner");             
                winner.innerText = 'YOU WON! Reload the page to play again';
                endGame();
            }
              
        } else if (computerChoice === humanChoice) { // Tie Condition
              const result = document.querySelector(".result");             
              result.innerText = `You tied this round! Both players chose ${humanChoice}.`; 

        } else if (
          computerChoice === "PAPER" && humanChoice === "ROCK" ||
          computerChoice === "SCISSORS" && humanChoice === "PAPER" ||
          computerChoice === "ROCK" && humanChoice === "SCISSORS"){ // Lose Conditions
              computerScore++;
              const cScore = document.querySelector(".cScore");
              cScore.innerText = `COMP SCORE:${computerScore}`;
              const result = document.querySelector(".result");             
              result.innerText =`You lost this round! Computer's ${computerChoice} beats your ${humanChoice}.`; 
              if (computerScore == 5) {
                const winner = document.querySelector(".winner");             
                winner.innerText = 'COMPUTER WON! Reload the page to play again';
                endGame();             
          }
          }
        }

        function endGame(){ //Create a function to end game when the human or computer reaches 5 points
            const allButtons = document.querySelectorAll("button");
            allButtons.forEach(elem => {
                elem.disabled = true
            })
        }
        
   
