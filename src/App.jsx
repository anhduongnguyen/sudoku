import React, { useState } from 'react';
import './App.css';
import Board from '../components/board';
import Rules from '../components/rules';
import EndPopup from '../components/popup';
import GameTimer from '../components/timer';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const time = new Date();
  time.setSeconds(time.getSeconds() + 5); // currently testing with 5 secs

  const handleExpire = () => {
    setIsModalOpen(true);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="app-container">
      <div className="main-section">
        <div className="board-container">
          <h1>Sudoku</h1>
          <Board />
        </div>
        <div className="right-container">
          <div className="timer-container">
            <GameTimer expiryTimestamp={time} onExpire={handleExpire} />
          </div>
          <div className="legend">
            <img src="/icons/iconlegend.png" alt="Legend" />
          </div>
        </div>
      </div>
      <div className='rules'>
        <h2> Rules</h2>
        <Rules />
      </div>
      <EndPopup isOpen={isModalOpen} toggle={toggleModal} />
    </div>
  );
};

export default App;
