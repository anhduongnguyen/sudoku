import React, { useState } from 'react';


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

const icons = [
  '/icons/icon1.png',
  '/icons/icon2.png',
  '/icons/icon3.png',
  '/icons/icon4.png',
  '/icons/icon5.png',
  '/icons/icon6.png',
  '/icons/icon7.png',
  '/icons/icon8.png',
  '/icons/icon9.png'
];

const iconMessages = [
  "SYSTEM: BEST MOVE",
  "SYSTEM: GREAT MOVE",
  "SYSTEM: BRILLIANT",
  "SYSTEM: EXCELLENT",
  "SYSTEM: GOOD",
  "SYSTEM: BLUNDER",
  "SYSTEM: INACCURACY",
  "SYSTEM: MISTAKE",
  "SYSTEM: MISS"
];

const probabilityThreshold = 0.3;

const getRandomIcon = () => {
  return icons[Math.floor(Math.random() * 5)];
};

const getRandomRepeatIcon = () => {
  return icons[5 + Math.floor(Math.random() * 4)];
};

const Board = ({ addMessage }) => {
  const [board, setBoard] = useState(initialBoard.map(row => row.map(cell => ({ value: cell, readOnly: cell !== '' }))));
  const [iconMappings, setIconMappings] = useState({});

  // Check row and column for repeats
  const checkForRepeats = (value, row, col) => {
    for (let i = 0; i < 9; i++) {
      if (i !== col && board[row][i].value === value) return true; 
      if (i !== row && board[i][col].value === value) return true; 
    }

    // Check 3x3 subgrid for repeats
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if ((i !== row || j !== col) && board[i][j].value === value) return true;
      }
    }

    return false;
  };

  const handleChange = (e, row, col) => {
    const value = e.target.value;
    if (value === '' || /^[1-9]$/.test(value)) {
      const newBoard = board.map(r => r.map(cell => ({ ...cell })));
      newBoard[row][col].value = value;
      setBoard(newBoard);

      const cellKey = `${row}-${col}-${value}`;

      if (value) {
        if (!iconMappings[cellKey]) {
          let icon = null;
          if (checkForRepeats(value, row, col)) {
            if (Math.random() < probabilityThreshold) {
              icon = getRandomRepeatIcon();
            }
          } else {
            if (Math.random() < probabilityThreshold) {
              icon = getRandomIcon();
            }
          }
          if (icon) {
            setIconMappings(prev => ({ ...prev, [cellKey]: icon }));
            const iconIndex = icons.indexOf(icon);
            if (iconIndex !== -1) {
              addMessage({ icon: icon, text: iconMessages[iconIndex] });
            }
          }
        }
      } else {
        const newIconMappings = { ...iconMappings };
        delete newIconMappings[`${row}-${col}-${newBoard[row][col].value}`];
        setIconMappings(newIconMappings);
      }
    }
  };

  return (
    <div className="sudoku-board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="sudoku-row">
          {row.map((cell, colIndex) => (
            <div key={colIndex} className="sudoku-cell-wrapper">
              <input
                type="text"
                value={cell.value}
                onChange={(e) => handleChange(e, rowIndex, colIndex)}
                className={`sudoku-cell ${cell.readOnly ? 'prefilled' : ''}`}
                maxLength="1"
                pattern="[1-9]"
                readOnly={cell.readOnly}
              />
              {iconMappings[`${rowIndex}-${colIndex}-${cell.value}`] && (
                <img
                  src={iconMappings[`${rowIndex}-${colIndex}-${cell.value}`]}
                  alt="icon"
                  className="icon"
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;