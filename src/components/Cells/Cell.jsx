import React from "react";
import { BOMB, EMPTY, NUMBER } from "../../utils/constants";
import Number from "./Number";
import Empty from "./Empty";
import "../../css/Cell.css";
import Bomb from "./Bomb";

const Cell = ({ type, data }) => {
  let content;
  if (type === NUMBER) {
    content = <Number number={data.number} />;
  } else if (type === BOMB) {
    content = <Bomb setStatus={data.setStatus} />;
  } else if (type === EMPTY) {
    content = <Empty />;
  }

  return content;
};

export default Cell;
