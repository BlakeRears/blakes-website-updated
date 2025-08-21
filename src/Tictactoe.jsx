
import { useState } from 'react';

function Tictactoe() {

    const winningCombinations = [
        [0, 1, 2], // Row 1
        [3, 4, 5], // Row 2
        [6, 7, 8], // Row 3
        [0, 3, 6], // Column 1
        [1, 4, 7], // Column 2
        [2, 5, 8], // Column 3
        [0, 4, 8], // Diagonal 1
        [2, 4, 6], // Diagonal 2
    ];

    const checkWinner = (board) => {
        for (let [a, b, c] of winningCombinations) {
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    }

    const [board, setBoard] = useState(Array(9).fill(""));
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [status, setStatus] = useState("Player X's turn");

    function handleCellClick(index) {
        if (board[index] || checkWinner(board)) return; // ignore if filled or game over

        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);

        const winner = checkWinner(newBoard);
        if (winner) {
            setStatus(`Player ${winner} wins!`);
            return;
        }

        if (newBoard.every((cell) => cell)) {
            setStatus("It's a draw!");
            return;
        }

        const nextPlayer = currentPlayer === "X" ? "O" : "X";
        setCurrentPlayer(nextPlayer);
        setStatus(`Player ${nextPlayer}'s turn`);
    }

    function resetGame() {
        setBoard(Array(9).fill(""));
        setCurrentPlayer("X");
        setStatus("Player X's turn");
    }

    return (
        <div className="flex flex-col items-center gap-4">
            <h2 className="text-xl font-bold text-white">{status}</h2>
            <hr className="w-2xs h-px my-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent border-none"></hr>
            <div className="grid grid-cols-3 gap-2">
                {board.map((cell, i) => (
                    <button
                        key={i}
                        onClick={() => handleCellClick(i)}
                        className="w-20 h-20 border-2 border-cyan-700 text-2xl flex items-center justify-center rounded-md"
                    >
                        <span className='text-white font-semibold text-5xl'>
                            {cell}
                        </span>
                    </button>
                ))}
            </div>
            <button
                onClick={resetGame}
                className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded-lg shadow-md"
            >
                Reset
            </button>
        </div>
    );
}

export default Tictactoe