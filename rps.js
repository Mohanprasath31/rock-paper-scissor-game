const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function computer() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

const buttons = document.querySelectorAll(".choice-btn");
const resultText = document.getElementById("result");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerChoice = button.id;
        const computerChoice = computer();
        const result = playRound(playerChoice, computerChoice);
        resultText.textContent = result;
        playerScoreDisplay.textContent = `Player: ${playerScore}`;
        computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    });
});
