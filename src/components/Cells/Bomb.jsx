import React from "react";
import "../../css/Cell.css";
import { LOSS } from "../../utils/constants";

const Bomb = ({ setStatus }) => {
  const onClick = () => {
    setStatus(LOSS);
  };

  return (
    <div className="grid-item" onClick={onClick}>
      Bomb
    </div>
  );
};

export default Bomb;
