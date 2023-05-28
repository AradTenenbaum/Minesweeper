import React, { useState } from "react";
import Board from "../components/Board";
import "../css/Game.css";
import { IN_PROGRESS, LOSS, WIN } from "../utils/constants";

const Game = () => {
  const [status, setStatus] = useState(IN_PROGRESS);

  return (
    <div className="game-container">
      {status === LOSS ? (
        <div>You lost</div>
      ) : status === WIN ? (
        <div>You win</div>
      ) : (
        <Board setStatus={setStatus} />
      )}
    </div>
  );
};

export default Game;
