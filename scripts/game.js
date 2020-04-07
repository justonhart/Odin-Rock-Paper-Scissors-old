
function playRound(playerChoice, computerChoice){
    let output, winner;
    
    if(playerChoice === computerChoice)
        output =  "It's a draw!";
    
    else{
        if(playerChoice == "rock"){
            if(computerChoice == "paper"){
                output = "You lose! Paper beats Rock!";
                updateScores("c");
            }
            else{
                output = "You win! Rock beats Paper!";
                updateScores("p");
            }
                
        }
        else if(playerChoice == "paper"){
            if(computerChoice == "scissors"){
                output = "You lose! Scissors beats Paper!";
                updateScores("c");
            }
            else{
                output = "You win! Paper beats Rock!";
                updateScores("p");
            }
                
        }
        else{
            if(computerChoice == "rock"){
                output = "You lose! Rock beats Scissors!";
                updateScores("c");
            }
            else{
                output = "You win! Scissors beats Paper!";
                updateScores("p");
            }
        }
    }

    document.getElementById("matchResult").innerHTML = output;
    if(winner)
        updateScores();
    return;
}

function computerPlay(){
    let choice;
    let i = Math.random();
    if(i < .33) return "rock";
    if(i < .66) return "paper";
    return "scissors";
}

function updateScores(winner){
    let playerWins = Number(document.getElementById("playerScore").innerHTML.slice(-1));
    let computerWins = Number(document.getElementById("computerScore").innerHTML.slice(-1));

    //increment the winner's score
    if(winner === "c")
        document.getElementById("computerScore").innerHTML = `Computer score: ${++computerWins}`;
    else
        document.getElementById("playerScore").innerHTML = `Player score: ${++playerWins}`;

    //best of 5
    if(playerWins == 3 || computerWins == 3)
        offerReplay();

    return;
}

//once a score of 3 is reached, check to see if the player wants to restart
function offerReplay(){
    document.getElementById("buttonPanel").setAttribute("hidden", true);
    document.getElementById("replay").removeAttribute('hidden');
}

function reset(){

}