import React, { useEffect, useState } from "react";
import "../css/Board.css";
import { BOMB, EMPTY, NUMBER, WIN } from "../utils/constants";
import Cell from "./Cells/Cell";
import {
  bombsNear,
  getRandomLocations,
  inBounds,
  setPosVisible,
} from "../utils/board";
import { convertIndexesToId } from "../utils/convert";

const Board = ({ setStatus }) => {
  const [board, setBoard] = useState([]);
  const [clickedBoxes, setClickedBoxes] = useState([]);

  const clickOnEmpty = (i, j) => {
    setBoard((board) => {
      let toClick = [];
      let nextClicks = [[i, j]];
      const newBoard = [...board];

      setPosVisible(i, j, newBoard);

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

      while (nextClicks.length > 0) {
        toClick = nextClicks;
        nextClicks = [];
        toClick.forEach((indexes) => {
          directions.forEach((dir) => {
            const newI = indexes[0] + dir[0];
            const newJ = indexes[1] + dir[1];
            if (
              inBounds(4, newI, newJ) &&
              board[newI][newJ].props.type !== BOMB
            ) {
              if (board[newI][newJ].props.type === NUMBER) {
                setPosVisible(newI, newJ, newBoard);
                setClickedBoxes((boxes) => [...boxes, [newI, newJ]]);
              } else if (
                board[newI][newJ].props.type === EMPTY &&
                !board[newI][newJ].props.isVisible
              ) {
                setPosVisible(newI, newJ, newBoard);
                setClickedBoxes((boxes) => [...boxes, [newI, newJ]]);
                nextClicks.push([newI, newJ]);
              }
            }
          });
        });
      }
      return newBoard;
    });
  };

  useEffect(() => {
    let success = false;
    if (board && board.length > 0) {
      success = true;

      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if (
            board[i][j].props.type !== BOMB &&
            !clickedBoxes.some((box) => box[0] === i && box[1] === j)
          ) {
            success = false;
            break;
          }
        }
      }

      if (success) setStatus(WIN);
    }
  }, [clickedBoxes]);

  useEffect(() => {
    const bombs = getRandomLocations(4, 2);

    let _board = new Array(4);
    for (let i = 0; i < 4; i++) _board[i] = new Array(4);

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (bombs.some((bomb) => bomb[0] === i && bomb[1] === j)) {
          _board[i][j] = (
            <Cell
              key={convertIndexesToId(i, j)}
              id={convertIndexesToId(i, j)}
              type={BOMB}
              data={{ setStatus: setStatus }}
              setBoard={setBoard}
              clickedBoxes={clickedBoxes}
              setClickedBoxes={setClickedBoxes}
              isVisible={false}
              isFlag={false}
            />
          );
        } else {
          const numOfBombsNear = bombsNear(bombs, i, j);
          if (numOfBombsNear > 0) {
            _board[i][j] = (
              <Cell
                key={convertIndexesToId(i, j)}
                id={convertIndexesToId(i, j)}
                type={NUMBER}
                data={{ number: numOfBombsNear }}
                clickedBoxes={clickedBoxes}
                setClickedBoxes={setClickedBoxes}
                setBoard={setBoard}
                isVisible={false}
                isFlag={false}
              />
            );
          } else {
            _board[i][j] = (
              <Cell
                key={convertIndexesToId(i, j)}
                id={convertIndexesToId(i, j)}
                type={EMPTY}
                clickedBoxes={clickedBoxes}
                setClickedBoxes={setClickedBoxes}
                setBoard={setBoard}
                isVisible={false}
                isFlag={false}
                clickOnEmpty={clickOnEmpty}
              />
            );
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
