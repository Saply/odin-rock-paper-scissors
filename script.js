let playerWins = 0;
let computerWins = 0;

// computer returns random move
function getComputerChoice() {
    let moves = ["rock", "paper", "scissors"];
    return moves[(Math.floor(Math.random() * moves.length))];
}

// plays a round and returns the winning player 
function playRound(playerSelection, computerSelection) {
    // let playerSelection = playerChoice.toLowerCase();
    console.log(playerSelection);
    if (playerSelection == computerSelection) {
        return "tie";
    }
    else if (
        playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper" 
    ) {
        playerWins++;
        return "player";
    }

    else {
        computerWins++;
        return "computer";
    }
}

function a(selection) {
    switch(selection) {
        case "rock":
            return "🪨";
        case "paper":
            return "📄";
        case "scissors":
            return "✂️";
    }
}

function addTableColumn(winner, playerSelection, computerSelection) {
    let textToEmoji = (selection) => {
        switch(selection) {
            case "rock":
                return "🪨";
            case "paper":
                return "📄";
            case "scissors":
                return "✂️";
        }
    }
    let playerMove = textToEmoji(playerSelection);
    let computerMove = textToEmoji(computerSelection);

    const table = document.querySelector(".results-table");

    const tr = document.createElement("tr");
    const tdPlayer = document.createElement("td");
    tdPlayer.appendChild(document.createTextNode(playerMove));

    const tdComputer = document.createElement("td");
    tdComputer.appendChild(document.createTextNode(computerMove));

    const tdWinner = document.createElement("td");
    if (winner == "player") {
        tdPlayer.style.backgroundColor = "rgb(38, 158, 52)";
        tdComputer.style.backgroundColor = "rgb(38, 158, 52)";
        tdWinner.style.backgroundColor = "rgb(38, 158, 52)";
        tdWinner.appendChild(document.createTextNode(`Player wins!`))
    }

    else if (winner == "computer") {
        tdPlayer.style.backgroundColor = "rgb(148, 49, 49)";
        tdComputer.style.backgroundColor = "rgb(148, 49, 49)";
        tdWinner.style.backgroundColor = "rgb(148, 49, 49)";
        tdWinner.appendChild(document.createTextNode(`Computer wins!`))
    }

    else {
        tdPlayer.style.backgroundColor = "rgb(185, 154, 154)";
        tdComputer.style.backgroundColor = "rgb(185, 154, 154)";
        tdWinner.style.backgroundColor = "rgb(185, 154, 154)";
        tdWinner.appendChild(document.createTextNode(`It's a tie!`));
    }
        

    tr.appendChild(tdPlayer);
    tr.appendChild(tdComputer);
    tr.appendChild(tdWinner);

    table.appendChild(tr);
}

function resetGame() {
    window.location.reload();
}

// returns player move, computer move and verdict
function playMove(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    addTableColumn(result, playerSelection, computerSelection);    

    // disable each button
    if (playerWins == 5 || computerWins == 5) {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        
    }
}

const rockButton = document.querySelector(".button-rock");
rockButton.addEventListener("click", () => {
    playMove("rock");
})

const paperButton = document.querySelector(".button-paper");
paperButton.addEventListener("click", () => {
    playMove("paper");
})

const scissorsButton = document.querySelector(".button-scissors");
scissorsButton.addEventListener("click", () => {
    playMove("scissors");
})

const playOrRestart = document.querySelector(".restart")
playOrRestart.addEventListener("click", () => {
    window.location.reload();
})

const test = document.querySelector(".results-container p")
test.textContent = ""
