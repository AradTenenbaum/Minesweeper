import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

export const Home = () => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-heading">Welcome to Minesweeper</h1>
      <Link to="game">
        <button className="start-button">Start Game</button>
      </Link>
    </div>
  );
};
