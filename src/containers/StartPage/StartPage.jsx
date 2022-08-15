import React from "react";
import { Link } from "react-router-dom";

import {
  FIRST_TITLE,
  SECOND_TITLE,
  INSTRUCTIONS_BTN,
  NEW_GAME_BTN,
} from "./copy";
import "./startPage.css";

const StartPage = () => {
  return (
    <div className="start-page">
      <div className="title-container">
        <h2>{FIRST_TITLE}</h2>
        <p className="line"></p>
        <h1 className="title">{SECOND_TITLE}</h1>
      </div>
      <div className="btns">
        <Link to="instructions-page" className="btn">
          {INSTRUCTIONS_BTN}
        </Link>
        <Link to="score-table" className="btn">
          {NEW_GAME_BTN}
        </Link>
      </div>
    </div>
  );
};

export default StartPage;
