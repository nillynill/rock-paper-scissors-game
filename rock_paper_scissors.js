console.log("Code Of Rock-Paper-Scissors Game in Javascript");

function getComputerChoice(){

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

getComputerChoice();
