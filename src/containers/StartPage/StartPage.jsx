import React from "react";
import { Link } from "react-router-dom";

import "./startPage.css";

const StartPage = () => {
  return (
    <div className="start-page">
      <div className="title-container">
        <h2>CARD GAME</h2>
        <p className="line"></p>
        <h1 className="title">WHIST</h1>
      </div>
      <div className="btns">
        <Link to="instructions-page" className="btn">
          Instructions
        </Link>
        <Link to="score-table" className="btn">
          New Game
        </Link>
      </div>
    </div>
  );
};

export default StartPage;
