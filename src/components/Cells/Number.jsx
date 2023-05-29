import React, { useState } from "react";
import "../../css/Cell.css";
import { convertIdToIndexes } from "../../utils/convert";
import { setPosVisible } from "../../utils/board";

const Number = ({
  number,
  clickedBoxes,
  setClickedBoxes,
  id,
  isVisible,
  setBoard,
  isFlag,
}) => {
  const onClick = () => {
    if (!isVisible) {
      const indexes = convertIdToIndexes(id);
      setBoard((board) => {
        let newBoard = [...board];
        setPosVisible(indexes[0], indexes[1], newBoard);
        return newBoard;
      });
      setClickedBoxes((boxes) => [...boxes, indexes]);
    }
  };

  const onContextMenu = (e) => {
    e.preventDefault();
    const indexes = convertIdToIndexes(id);
    setBoard((board) => {
      let newBoard = [...board];
      newBoard[indexes[0]][indexes[1]] = {
        ...newBoard[indexes[0]][indexes[1]],
        props: {
          ...newBoard[indexes[0]][indexes[1]].props,
          isFlag: !newBoard[indexes[0]][indexes[1]].props.isFlag,
        },
      };
      return newBoard;
    });
  };

  return (
    <div
      className={"grid-item" + (isVisible ? " open-cell" : "")}
      onClick={onClick}
      onContextMenu={onContextMenu}
    >
      {isVisible ? number : " "}
    </div>
  );
};

export default Number;
