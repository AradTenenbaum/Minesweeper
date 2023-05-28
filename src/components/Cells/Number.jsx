import React, { useState } from "react";
import "../../css/Cell.css";

const Number = ({ number }) => {
  const [isVisible, setIsVisible] = useState(false);

  const onClick = () => {
    setIsVisible(true);
  };

  return (
    <div className="grid-item" onClick={onClick}>
      {isVisible ? number : " "}
    </div>
  );
};

export default Number;
