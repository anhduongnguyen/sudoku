import React from 'react';
import './App.css';
import Board from '../components/board';
import Rules from '../components/rules';
function App() {
  return (
    <>
      <h1>Sudoku</h1>
      <Board />
      <div className='rules'>
      <h2> Rules</h2>
      <Rules />
      </div>

    </>
  );
}

export default App;
