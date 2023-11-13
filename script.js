// computer returns random move
function getComputerChoice() {
    let moves = ["rock", "paper", "scissors"];
    return moves[(Math.floor(Math.random() * moves.length))];
}

// plays a round, returns 0 if player loses, 1 if player wins and 2 if tie 
function playRound(playerChoice, computerSelection) {
    let playerSelection = playerChoice.toLowerCase();
    if (playerSelection == computerSelection) {
        return 2;
    }
    else if (
        playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper" 
    )
        return 1;
    else {
        return 0;
    }
}

function validatePlayerInput() {
    while(true) {
        let playerChoice = prompt("Input your move: ").toLowerCase();
        if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
            return playerChoice;
        }
        else {
            console.log(`Invalid input: ${playerChoice}`)
            continue;
        }
    }
    
}
function game() {
    let playerWins = 0;
    let computerWins = 0;

    for(let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        // let playerChoice = validatePlayerInput();
        let result = playRound(playerChoice, computerChoice);
        console.log(`Player picks ${playerChoice}, Computer picks ${computerChoice}`);

        if (result == 0) {
            console.log(`Computer wins round ${i + 1}`);
            computerWins++;
        }
        else if (result == 1) {
            console.log(`Player wins round ${i + 1}`);
            playerWins++;
        }
        else {
            console.log("Tie between Player and Computer")
        }
    }
}

game();