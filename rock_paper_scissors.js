console.log("Rock-Paper-Scissors Game in Javascript");

function getComputerChoice(){

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

getComputerChoice();




function getHumanChoice(){
    
    let HUMAN_CHOICE = prompt("What is your choice? ROCK, PAPER or SCISSORS?").toUpperCase()
    console.log (HUMAN_CHOICE);
    return HUMAN_CHOICE;
}

getHumanChoice();