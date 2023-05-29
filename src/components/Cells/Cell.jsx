import React from "react";
import { BOMB, EMPTY, NUMBER } from "../../utils/constants";
import Number from "./Number";
import Empty from "./Empty";
import "../../css/Cell.css";
import Bomb from "./Bomb";

const Cell = ({
  type,
  data,
  clickedBoxes,
  setClickedBoxes,
  id,
  setBoard,
  isVisible,
  clickOnEmpty,
  isFlag,
}) => {
  let content;
  if (type === NUMBER) {
    content = (
      <Number
        number={data.number}
        clickedBoxes={clickedBoxes}
        setClickedBoxes={setClickedBoxes}
        id={id}
        isVisible={isVisible}
        setBoard={setBoard}
        isFlag={isFlag}
      />
    );
  } else if (type === BOMB) {
    content = (
      <Bomb
        id={id}
        setStatus={data.setStatus}
        setBoard={setBoard}
        isFlag={isFlag}
      />
    );
  } else if (type === EMPTY) {
    content = (
      <Empty
        clickedBoxes={clickedBoxes}
        setClickedBoxes={setClickedBoxes}
        id={id}
        isVisible={isVisible}
        setBoard={setBoard}
        clickOnEmpty={clickOnEmpty}
        isFlag={isFlag}
      />
    );
  }

  return content;
};

export default Cell;
