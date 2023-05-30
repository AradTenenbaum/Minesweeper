import React, { useEffect, useState } from "react";
import "../css/GameStatsBar.css";

const GameStatsBar = ({ flagsAmount }) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const startTime = new Date().getTime();

    const intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      const elapsedSeconds = Math.floor((currentTime - startTime) / 1000);

      setElapsedTime(elapsedSeconds);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="game-bar-container">
      <div className="timer">{elapsedTime}</div>
      <div className="bombs">Bombs Left: {2 - flagsAmount}</div>
    </div>
  );
};

export default GameStatsBar;
