import React, { useState } from "react";
import "../../css/Cell.css";

const Empty = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onClick = () => {
    setIsVisible(true);
  };

  return (
    <div className="grid-item" onClick={onClick}>
      {isVisible ? "Empty" : " "}
    </div>
  );
};

export default Empty;
