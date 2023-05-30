import React from "react";
import "../../css/Cell.css";
import { LOSS } from "../../utils/constants";
import { convertIdToIndexes } from "../../utils/convert";
import { setIsFlag } from "../../utils/board";

const Bomb = ({ setStatus, setBoard, id, isFlag }) => {
  const onClick = () => {
    if (!isFlag) {
      setStatus(LOSS);
    }
  };

  const onContextMenu = (e) => {
    e.preventDefault();
    setBoard((board) => {
      const indexes = convertIdToIndexes(id);
      let newBoard = [...board];
      setIsFlag(indexes[0], indexes[1], newBoard, !isFlag);
      return newBoard;
    });
  };

  return (
    <div className="grid-item" onClick={onClick} onContextMenu={onContextMenu}>
      {isFlag ? "🏳️" : " "}
    </div>
  );
};

export default Bomb;
