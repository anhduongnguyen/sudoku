import { useState, useEffect } from 'react';
import { getEndGameData } from './gamedata';

const useGameState = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRulesOpen, setIsRulesOpen] = useState(true);
  const [timerStart, setTimerStart] = useState(false);
  const [messages, setMessages] = useState([]);
  const [iconStats, setIconStats] = useState({
    brilliant: 0,
    greatMove: 0,
    bestMove: 0,
    excellent: 0,
    good: 0,
    inaccuracy: 0,
    mistake: 0,
    blunder: 0,
  });

  useEffect(() => {
    setIsRulesOpen(true);
  }, []);

  const handleExpire = () => {
    setIsModalOpen(true);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleRulesModal = () => {
    setIsRulesOpen(!isRulesOpen);
    if (isRulesOpen) {
      setTimerStart(true);
    }
  };

  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);

    const newStats = { ...iconStats };
    switch (message.icon) {
      case '/icons/icon1.png':
        newStats.brilliant += 1;
        break;
      case '/icons/icon2.png':
        newStats.greatMove += 1;
        break;
      case '/icons/icon3.png':
        newStats.bestMove += 1;
        break;
      case '/icons/icon4.png':
        newStats.excellent += 1;
        break;
      case '/icons/icon5.png':
        newStats.good += 1;
        break;
      case '/icons/icon6.png':
        newStats.inaccuracy += 1;
        break;
      case '/icons/icon7.png':
        newStats.mistake += 1;
        break;
      case '/icons/icon9.png':
        newStats.blunder += 1;
        break;
      default:
        console.log('Unknown icon:', message.icon);
        break;
    }
    setIconStats(newStats);
  };

  const endGameData = getEndGameData(iconStats);

  return {
    isModalOpen,
    isRulesOpen,
    timerStart,
    messages,
    endGameData,
    handleExpire,
    toggleModal,
    toggleRulesModal,
    addMessage,
  };
};

export default useGameState;