import React, { useEffect, useState } from "react";
import "../css/Board.css";
import { BOMB, EMPTY, NUMBER } from "../utils/constants";
import Cell from "./Cells/Cell";
import { bombsNear, getRandomLocations, inBounds } from "../utils/board";

const Board = ({ setStatus }) => {
  const [board, setBoard] = useState([]);

  const clickOnEmpty = (i, j) => {
    const toClick = [];
    const directions = [
      [1, 1],
      [1, -1],
      [-1, 1],
      [-1, -1],
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];
    directions.forEach((dir) => {
      if (
        inBounds(4, i + dir[0], j + dir[1]) &&
        board[i + dir[0]][j + dir[1]].props.type !== BOMB
      ) {
        console.log(board[i + dir[0]][j + dir[1]]);
        if (board[i + dir[0]][j + dir[1]].props.type === NUMBER) {
        } else if (board[i + dir[0]][j + dir[1]].props.type !== EMPTY) {
          toClick.append([i + dir[0], j + dir[1]]);
        }
      }
    });
  };

  useEffect(() => {
    const bombs = getRandomLocations(4, 2);

    let _board = new Array(4);
    for (let i = 0; i < 4; i++) _board[i] = new Array(4);

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (bombs.some((bomb) => bomb[0] === i && bomb[1] === j)) {
          _board[i][j] = (
            <Cell
              key={i + "-" + j}
              type={BOMB}
              data={{ setStatus: setStatus }}
            />
          );
        } else {
          const numOfBombsNear = bombsNear(bombs, i, j);
          if (numOfBombsNear > 0) {
            _board[i][j] = (
              <Cell
                key={i + "-" + j}
                type={NUMBER}
                data={{ number: numOfBombsNear }}
              />
            );
          } else {
            _board[i][j] = <Cell key={i + "-" + j} type={EMPTY} />;
          }
        }
      }
    }
    setBoard(_board);
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
