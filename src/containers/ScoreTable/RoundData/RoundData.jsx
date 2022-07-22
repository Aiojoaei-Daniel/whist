import React from "react";

import "./roundData.css";

const RoundData = ({
  score,
  setScore,
  currentRound,
  currentPlayer,
  setRoundScore,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const scoreCopy = score;

    if (event.target.hands.value !== "")
      scoreCopy[currentRound][currentPlayer].hands = event.target.hands.value;
    if (event.target.score.value !== "")
      scoreCopy[currentRound][currentPlayer].score = event.target.score.value;

    setScore(score);
    setRoundScore(false);
  };

  return (
    <div className="round-data">
      <form action="" className="round-data-form" onSubmit={handleSubmit}>
        <input type="number" name="hands" placeholder="Câte mâini faci?" />
        <input type="number" name="score" placeholder="Câte mâini ai făcut?" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RoundData;
