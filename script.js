const emoji = ["rock","paper","scissors"];
const playerDisplay = document.getElementDyId("playerDisplay");
const computerDisplay = document.getElementDyId("computerDisplay");
const resultDisplay = document.getElementDyId("esultDisplay");

function playGame(playerChoice){
    const computerChoice =choices[ Math.floor(Math.random() *3) ];
    result= "";

    if(playerChoice === computerChoice){
        result ="IT'S A TIE";
    }
    else{
        switch(playerChoice){
            case "rock":
    result = (computerChoice === "scissors")? "YOU WIN!":"YOU LOSE!";
    break;
    case "paper":
    result = (computerChoice === "rock")? "YOU WIN!":"YOU LOSE!";
    break;
    case "scissors":
        result = (computerChoice === "paper")? "YOU WIN!":"YOU LOSE!";
        }
    }
    playerDisplay.textContent = 'PLAYER ${playerChoice}';
    computerDisplay.textContent = 'COMPUTER: ${computerChoice}';
    playerDisplay.textContent = 'PLAYER: ${playerChoice}';

}