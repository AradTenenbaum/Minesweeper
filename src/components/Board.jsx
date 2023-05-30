import React, { useEffect, useState } from "react";
import "../css/Board.css";
import { BOMB, WIN } from "../utils/constants";
import { buildBoard, isWin } from "../handlers/board.handler";

const Board = ({ setStatus, setFlagsAmount }) => {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    if (board && board.length > 0 && isWin(board, setFlagsAmount)) {
      setStatus(WIN);
    }
  }, [board]);

  useEffect(() => {
    setBoard(buildBoard(setStatus, setBoard));
  }, []);

  return (
    <div className="">
      <div className="grid-container">
        {board.map((row) => row.map((cell) => cell))}
      </div>
    </div>
  );
};

export default Board;
