import React, { useState } from "react";
import "../../css/Cell.css";
import { convertIdToIndexes } from "../../utils/convert";
import { setIsFlag } from "../../utils/board";
import { clickOnEmpty } from "../../handlers/cell.handler";

const Empty = ({ id, isVisible, setBoard, isFlag }) => {
  const onClick = () => {
    if (!isVisible && !isFlag) {
      const indexes = convertIdToIndexes(id);
      clickOnEmpty(indexes[0], indexes[1], setBoard);
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
      {isFlag ? "🏳️" : " "}
    </div>
  );
};

export default Empty;
