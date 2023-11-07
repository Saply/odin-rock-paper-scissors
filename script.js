// computer returns random move
function getComputerChoice() {
    let moves = ["Rock", "Paper", "Scissor"];
    return moves[(Math.floor(Math.random() * moves.length))];
}

console.log(getComputerChoice());