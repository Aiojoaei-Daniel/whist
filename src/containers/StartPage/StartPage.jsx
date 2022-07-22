import React from "react";
import { Link } from "react-router-dom";

import "./startPage.css";

const StartPage = () => {
  return (
    <div className="start-page">
      <Link to="instructions-page" className="btn">
        Instructions
      </Link>
      <Link to="score-table" className="btn">
        New Game
      </Link>
    </div>
  );
};

export default StartPage;
