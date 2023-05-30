import React, { useState } from "react";
import "../../css/Cell.css";
import { convertIdToIndexes } from "../../utils/convert";
import { setIsFlag, setPosVisible } from "../../utils/board";

const Number = ({ number, id, isVisible, setBoard, isFlag }) => {
  const onClick = () => {
    if (!isVisible && !isFlag) {
      const indexes = convertIdToIndexes(id);
      setBoard((board) => {
        let newBoard = [...board];
        setPosVisible(indexes[0], indexes[1], newBoard);
        return newBoard;
      });
    }
  };

  const onContextMenu = (e) => {
    if (!isVisible) {
      e.preventDefault();
      const indexes = convertIdToIndexes(id);
      setBoard((board) => {
        let newBoard = [...board];
        setIsFlag(indexes[0], indexes[1], newBoard, !isFlag);
        return newBoard;
      });
    }
  };

  return (
    <div
      className={"grid-item" + (isVisible ? " open-cell" : "")}
      onClick={onClick}
      onContextMenu={onContextMenu}
    >
      {isVisible ? number : isFlag ? "🏳️" : " "}
    </div>
  );
};

export default Number;
