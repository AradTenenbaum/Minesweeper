import React, { useState } from "react";
import Board from "../components/Board";
import "../css/Game.css";
import { IN_PROGRESS, LOSS, WIN } from "../utils/constants";
import GameStatsBar from "../components/GameStatsBar";

const Game = () => {
  const [status, setStatus] = useState(IN_PROGRESS);
  const [flagsAmount, setFlagsAmount] = useState(0);

  return status === LOSS ? (
    <div className="game-container">You lost</div>
  ) : status === WIN ? (
    <div className="game-container">You win</div>
  ) : (
    <div className="game-container">
      <GameStatsBar flagsAmount={flagsAmount} />
      <Board setStatus={setStatus} setFlagsAmount={setFlagsAmount} />
    </div>
  );
};

export default Game;
