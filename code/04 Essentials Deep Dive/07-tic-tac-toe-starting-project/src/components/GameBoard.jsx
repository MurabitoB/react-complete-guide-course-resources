import React, { useState } from "react";

export default function GameBoard({ onSelectSquare, gameBoard }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [
  //       ...prevGameBoard.map((innertArr) => [...innertArr]),
  //     ];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });

  //   if (onSelectSquare) {
  //     onSelectSquare(rowIndex, colIndex);
  //   }
  // }

  return (
    <div id="game-board">
      <ol>
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, cellIndex) => (
                <li key={cellIndex}>
                  <button
                    onClick={() => onSelectSquare(rowIndex, cellIndex)}
                    disabled={playerSymbol !== null}
                  >
                    {playerSymbol}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
}
