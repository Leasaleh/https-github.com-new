const board = document.getElementById("board");
const statusText = document.getElementById("status");
const resetBtn = document.getElementById("resetBtn");

// Game state
let cells = Array(9).fill("");
let currentPlayer = "X";
let gameActive = true;

// Winning combinations
const winningCombos = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

// Start game immediately
startGame();

function startGame() {
    cells = Array(9).fill("");
    currentPlayer = "X";
    gameActive = true;

    statusText.textContent = "Player X’s turn";

    document.querySelectorAll(".cell").forEach(cell => {
        cell.textContent = "";
    });
}

// Handle clicks on the board
board.addEventListener("click", (e) => {
    if (!e.target.classList.contains("cell") || !gameActive) return;

    const index = e.target.dataset.index;

    // Prevent overwriting
    if (cells[index] !== "") return;

    makeMove(index);
});

// Place X or O
function makeMove(index) {
    cells[index] = currentPlayer;
    document.querySelector(`.cell[data-index='${index}']`).textContent = currentPlayer;

    checkResult();

    if (gameActive) {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusText.textContent = `Player ${currentPlayer}'s turn`;
    }
}

// Check win or draw
function checkResult() {
    for (let combo of winningCombos) {
        const [a, b, c] = combo;

        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            statusText.textContent = `Player ${cells[a]} Wins!`;
            gameActive = false;
            return;
        }
    }

    if (!cells.includes("")) {
        statusText.textContent = "Draw!";
        gameActive = false;
    }
}

// Reset button
resetBtn.addEventListener("click", startGame);

document.getElementById("backBtn").addEventListener("click", () => {
    window.location.href = "welcome.html";
});

