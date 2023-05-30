import Cell from "../components/Cells/Cell";
import { bombsNear, getRandomLocations } from "../utils/board";
import { BOMB, EMPTY, NUMBER } from "../utils/constants";
import { convertIndexesToId } from "../utils/convert";

export const buildBoard = (setStatus, setBoard) => {
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
              setBoard={setBoard}
              isVisible={false}
              isFlag={false}
            />
          );
        }
      }
    }
  }
  return _board;
};

export const isWin = (board, setFlagsAmount) => {
  let flags = 0;
  console.log("test");
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (board[i][j].props.type !== BOMB && !board[i][j].props.isVisible) {
        setFlagsAmount(flags);
        return false;
      } else if (board[i][j].props.type === BOMB && !board[i][j].props.isFlag) {
        setFlagsAmount(flags);
        return false;
      }
      if (board[i][j].props.isFlag) flags++;
    }
  }
  setFlagsAmount(flags);
  return true;
};
