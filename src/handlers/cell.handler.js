import { inBounds, setPosVisible } from "../utils/board";
import { BOMB, EMPTY, NUMBER } from "../utils/constants";

export const clickOnEmpty = (i, j, setBoard) => {
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
            } else if (
              board[newI][newJ].props.type === EMPTY &&
              !board[newI][newJ].props.isVisible
            ) {
              setPosVisible(newI, newJ, newBoard);
              nextClicks.push([newI, newJ]);
            }
          }
        });
      });
    }
    return newBoard;
  });
};
