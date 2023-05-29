import React from "react";
import "../../css/Cell.css";
import { LOSS } from "../../utils/constants";
import { convertIdToIndexes } from "../../utils/convert";

const Bomb = ({ setStatus, setBoard, id, isFlag }) => {
  const onClick = () => {
    setStatus(LOSS);
  };

  const onContextMenu = (e) => {
    e.preventDefault();
    setBoard((board) => {
      const indexes = convertIdToIndexes(id);
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
    <div className="grid-item" onClick={onClick} onContextMenu={onContextMenu}>
      {/* BOMB */}
    </div>
  );
};

export default Bomb;
