import React, { useState } from 'react';
import './tictactoe.css';

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [xWins, setXWins] = useState(0); // Track X's wins
  const [oWins, setOWins] = useState(0); // Track O's wins

  const checkWinner = (board) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (let [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = player;
    setBoard(newBoard);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);

      // Update win count
      if (newWinner === "X") {
        setXWins(xWins + 1);
      } else if (newWinner === "O") {
        setOWins(oWins + 1);
      }
    } else {
      setPlayer(player === "X" ? "O" : "X");
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setPlayer("X");
    setWinner(null);
  };

  return (
    <div className="board">
      <h1 className='header'>TICTACTOE GAME</h1>
      <div className="gamebox">
        {board.map((value, index) => (
          <button key={index} className="cell" onClick={() => handleClick(index)}>
            {value}
          </button>
        ))}
      </div>
      {winner && <div className="message">{winner} wins!</div>}
      {!winner && !board.includes(null) && <div className="message">It's a draw!</div>}

      {/* Display the win counts */}
      <div className="scoreboard">
        <div>X Wins: {xWins}</div>
        <div>O Wins: {oWins}</div>
      </div>

      <button className="reset" onClick={resetGame}>Reset Game</button>
    </div>
  );
}

export default TicTacToe;
