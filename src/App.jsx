import React, { useState } from 'react';
import './App.css';
import Board from '../components/board';
import Rules from '../components/rules';
import EndPopup from '../components/popup';
import GameTimer from '../components/timer';
import ChatBox from '../components/chatbox';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  
  const time = new Date();
  time.setSeconds(time.getSeconds() + 300); // 5 mins game

  const handleExpire = () => {
    setIsModalOpen(true);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <div className="app-container">
      <div className="main-section">
        <div className="board-container">
          <h1>Sudoku</h1>
          <Board addMessage={addMessage} />
        </div>
        <div className="right-container">
          <div className="timer-container">
            <GameTimer expiryTimestamp={time} onExpire={handleExpire} />
          </div>
          <div className="legend">
            <img src="/icons/iconlegend.png" alt="Legend" />
          </div>
          <ChatBox messages={messages} />
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