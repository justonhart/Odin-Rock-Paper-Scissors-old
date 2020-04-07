
function playRound(playerChoice, computerChoice){
    let output;
    
    if(playerChoice === computerChoice)
        output =  "It's a draw!";
    
    else{
        if(playerChoice == "rock"){
            if(computerChoice == "paper")
                output = "You lose! Paper beats Rock!";
            else
                output = "You win! Rock beats Paper!";
        }
        else if(playerChoice == "paper"){
            if(computerChoice == "scissors")
                output = "You lose! Scissors beats Paper!";
            else   
                output = "You win! Paper beats Rock!";
        }
        else{
            if(computerChoice == "rock")
                output = "You lose! Rock beats Scissors!";
            else
                output = "You win! Scissors beats Paper!";
        }
    }

    document.getElementById("matchResult").innerHTML = output;
    return;
}

function computerPlay(){
    let choice;
    let i = Math.random();
    if(i < .33) return "rock";
    if(i < .66) return "paper";
    return "scissors";
}

function game(){
    let playerWins = 0;
    let computerWins = 0;
    
    for(let i = 0; i < 5; i++){
        let result = playRound(prompt("Rock, paper, or scissors?").toLowerCase(), computerPlay());
        if(result.includes("win"))
            playerWins++;
        else if(result.includes("lose"))
            computerWins++;
        else
            i--;
        
        console.log(result);
        alert(result);
    }

    console.log(`You won ${playerWins} times! Computer won ${computerWins} times!`);
}