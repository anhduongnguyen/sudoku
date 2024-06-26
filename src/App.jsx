import React, { useState } from 'react';
import './App.css';

const initialBoard = [
  ['', '', '', '7', '', '', '6', '', ''],
  ['9', '', '', '', '', '4', '', '1', ''],
  ['', '', '8', '', '9', '', '5', '', ''],
  ['', '9', '', '', '7', '', '', '2', ''],
  ['', '', '3', '', '', '8', '', '', ''],
  ['4', '', '8', '', '', '', '1', '', ''],
  ['', '8', '', '3', '', '', '9', '', ''],
  ['1', '6', '', '', '', '', '', '7', ''],
  ['', '', '5', '', '', '8', '', '', '']
];

function App() {
  const [board, setBoard] = useState(initialBoard.map(row => row.map(cell => ({ value: cell, readOnly: cell !== '' }))));

  const handleChange = (e, row, col) => {
    const value = e.target.value;
    if (value === '' || /^[1-9]$/.test(value)) {
      const newBoard = board.map(r => r.map(cell => ({ ...cell })));
      newBoard[row][col].value = value;
      setBoard(newBoard);
    }
  };

  return (
    <>
      <h1>Sudoku</h1>
      <div className="sudoku-board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="sudoku-row">
            {row.map((cell, colIndex) => (
              <input
                key={colIndex}
                type="text"
                value={cell.value}
                onChange={(e) => handleChange(e, rowIndex, colIndex)}
                className={`sudoku-cell ${cell.readOnly ? 'prefilled' : ''}`}
                maxLength="1"
                pattern="[1-9]"
                readOnly={cell.readOnly}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
