export function getRandomLocations(length, count) {
  const randomLocations = [];

  while (randomLocations.length < count) {
    const randomI = Math.floor(Math.random() * length);
    const randomJ = Math.floor(Math.random() * length);
    if (!randomLocations.includes([randomI, randomJ])) {
      randomLocations.push([randomI, randomJ]);
    }
  }

  return randomLocations;
}

export function inBounds(length, i, j) {
  return i < length && i >= 0 && j < length && j >= 0;
}

export function bombsNear(bombsIndexes, i, j) {
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
  let counter = 0;
  directions.forEach((dir) => {
    if (
      inBounds(4, i + dir[0], j + dir[1]) &&
      bombsIndexes.some(
        (bomb) => bomb[0] === i + dir[0] && bomb[1] === j + dir[1]
      )
    ) {
      counter++;
    }
  });
  return counter;
}

export const setPosVisible = (i, j, board) => {
  board[i][j] = {
    ...board[i][j],
    props: { ...board[i][j].props, isVisible: true },
  };
};

export const setIsFlag = (i, j, board, isFlag) => {
  board[i][j] = {
    ...board[i][j],
    props: { ...board[i][j].props, isFlag: isFlag },
  };
};
