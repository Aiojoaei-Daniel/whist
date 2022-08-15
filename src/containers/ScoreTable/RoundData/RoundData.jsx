import React from "react";
import PropTypes from "prop-types";

import { utils } from "./utils";
import {
  BET_HANDS_TEXT,
  MADE_HANDS_TEXT,
  SCORE_FORM_TITLE,
  EMPTY_INPUT,
} from "./copy";

import "./roundData.css";

const RoundData = ({
  score,
  setScore,
  currentRound,
  playersNames,
  currentPlayer,
  currentRoundIndex,
  setAlert,
  setMessageAlert,
  setShowScoreForm,
  canAddFinalHands,
  setCanAddFinalHands,
  setCurrentRoundIndex,
}) => {
  const { handleBetHands, handleFinalHands } = utils(
    score,
    setScore,
    currentRound,
    playersNames,
    currentPlayer,
    currentRoundIndex,
    setAlert,
    setMessageAlert,
    canAddFinalHands,
    setCanAddFinalHands,
    setCurrentRoundIndex
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const currentHandsBet = parseInt(event.target.hands.value);
    const currentFinalHands = event.target.finalHands.value;

    if (currentHandsBet !== EMPTY_INPUT) handleBetHands(currentHandsBet);

    if (currentFinalHands !== EMPTY_INPUT)
      handleFinalHands(currentFinalHands, currentHandsBet);

    setShowScoreForm(false);
  };

  return (
    <div className="round-data">
      <form action="" className="round-data-form" onSubmit={handleSubmit}>
        <p className="score-form-title">
          {SCORE_FORM_TITLE} {currentRound} ({currentRoundIndex + 1})
        </p>
        <input
          type="number"
          name="hands"
          defaultValue={
            score[currentRoundIndex][currentPlayer].hands !== "0"
              ? score[currentRoundIndex][currentPlayer].hands
              : null
          }
          placeholder={BET_HANDS_TEXT}
        />
        <input type="number" name="finalHands" placeholder={MADE_HANDS_TEXT} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

RoundData.propTypes = {
  score: PropTypes.object,
  setScore: PropTypes.func,
  rounds: PropTypes.array,
  playersNames: PropTypes.array,
  currentPlayer: PropTypes.string,
  currentRoundIndex: PropTypes.number,
  setAlert: PropTypes.func,
  setMessageAlert: PropTypes.func,
  setShowScoreForm: PropTypes.func,
  countHands: PropTypes.number,
  setCountHands: PropTypes.func,
  canAddHands: PropTypes.bool,
  canAddFinalHands: PropTypes.bool,
  setCanAddHands: PropTypes.func,
  setCanAddFinalHands: PropTypes.func,
};

export default RoundData;
