export const getEndGameData = (iconStats) => {
    return [
      { icon: "Brilliant", img: "/icons/icon1.png", you: iconStats.brilliant, player: 10 },
      { icon: "Great Move", img: "/icons/icon2.png", you: iconStats.greatMove, player: 11 },
      { icon: "Best Move", img: "/icons/icon3.png", you: iconStats.bestMove, player: 13 },
      { icon: "Excellent", img: "/icons/icon4.png", you: iconStats.excellent, player: 16 },
      { icon: "Good", img: "/icons/icon5.png", you: iconStats.good, player: 12 },
      { icon: "Inaccuracy", img: "/icons/icon6.png", you: iconStats.inaccuracy, player: 3 },
      { icon: "Mistake", img: "/icons/icon7.png", you: iconStats.mistake, player: 3 },
      { icon: "Blunder", img: "/icons/icon9.png", you: iconStats.blunder, player: 4 },
    ];
  };