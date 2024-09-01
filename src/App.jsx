import React from 'react';
import './App.css';
import Board from './components/board';
import EndPopup from './components/popup';
import GameTimer from './components/timer';
import ChatBox from './components/chatbox';
import Rules from './components/rules';
import { Button } from 'reactstrap';
import useGameState from './utils/gameState';

const App = () => {
  const {
    isModalOpen,
    isRulesOpen,
    timerStart,
    messages,
    endGameData,
    handleExpire,
    toggleModal,
    toggleRulesModal,
    addMessage,
  } = useGameState();

  const time = new Date();
  time.setSeconds(time.getSeconds() + 300); 

  return (
    <div className="app-container">
      <div className="main-section">
        <div className="board-container">
          <h1>Sudoku</h1>
          <Board addMessage={addMessage} />
          <div className="rules-button">
            <Button size="lg" onClick={toggleRulesModal}>Rules</Button>
          </div>
        </div>
        <div className="right-container">
          <div className="timer-container">
            {timerStart && <GameTimer expiryTimestamp={time} onExpire={handleExpire} />}
          </div>
          <div className="legend">
            <img src="/icons/iconlegend.png" alt="Legend" />
          </div>
          <ChatBox messages={messages} />
        </div>
      </div>
      <Rules isOpen={isRulesOpen} toggle={toggleRulesModal} />
      <EndPopup isOpen={isModalOpen} toggle={toggleModal} data={endGameData} />
    </div>
  );
};

export default App;