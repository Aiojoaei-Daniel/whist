import React from "react";

import { utils } from "./utils";
import { ALERT, BET_HANDS_INPUT, MADE_HANDS_INPUT } from "./copy";

import "./roundData.css";

const RoundData = ({
  score,
  setScore,
  rounds,
  playersName,
  currentPlayer,
  currentRoundIndex,
  setAlert,
  setMessageAlert,
  setShowScoreForm,
  count,
  setCount,
}) => {
  const { showAlert, setBetHands, setPlayerScore } = utils(
    setAlert,
    setMessageAlert
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    // const scoreCopy = { score };  sa nu modific direct state-ul
    const scoreCopy = score;
    const currentHandsBet = event.target.hands.value;
    let betHands = scoreCopy[currentRoundIndex][currentPlayer];
    const currentScore = event.target.score.value;
    let scoreStorage = scoreCopy[currentRoundIndex][currentPlayer];
    const currentRound = rounds[currentRoundIndex];

    setBetHands(currentHandsBet, betHands, currentRound, ALERT.NUMBER_OF_HANDS);

    setPlayerScore(
      betHands,
      scoreStorage,
      currentScore,
      currentRoundIndex,
      currentPlayer,
      currentRound,
      scoreCopy,
      ALERT.HANDS_VALUE,
      ALERT.NUMBER_OF_HANDS
    );

    if (currentHandsBet !== "" && parseInt(currentHandsBet) <= currentRound) {
      setCount(count + 1);
    }

    if (scoreCopy[currentRoundIndex][currentPlayer].score !== "0") {
      setCount(0);
    }

    let betHands1 = 0;
    let finalHands = 0;

    if (count === playersName.length - 1) {
      playersName.forEach((player) => {
        if (
          scoreCopy[currentRoundIndex][currentPlayer].hands !== "0" &&
          scoreCopy[currentRoundIndex][currentPlayer].hands <= currentRound
        ) {
          betHands1 += parseInt(scoreCopy[currentRoundIndex][player].hands);
        } else if (parseInt(currentHandsBet) <= currentRound) {
          /// cand mainile pariate sunt prea mari
          betHands1 += parseInt(currentHandsBet);
        }
      });
      // aici ar trebui sa setez count = 0 si sa l folosesc si la finalHands
    }
    playersName.forEach((player) => {
      if (
        scoreCopy[currentRoundIndex][player].finalHands !== "0" &&
        scoreCopy[currentRoundIndex][player].finalHands <= currentRound
      ) {
        finalHands += parseInt(scoreCopy[currentRoundIndex][player].finalHands);
        console.log("in if", finalHands);
      } else if (parseInt(currentScore) <= currentRound) {
        finalHands += parseInt(currentScore);
        console.log("in else", finalHands);
      }
    });
    if (betHands1 === currentRound) {
      showAlert(ALERT.BET_HANDS);
      scoreCopy[currentRoundIndex][currentPlayer].hands = "0";
      setCount(playersName.length - 1);
    }

    if (finalHands > currentRound) {
      showAlert(ALERT.FINAL_HANDS);

      scoreCopy[currentRoundIndex][currentPlayer].score = "0";
    }

    setScore(scoreCopy);
    setShowScoreForm(false);
  };

  return (
    <div className="round-data">
      <form action="" className="round-data-form" onSubmit={handleSubmit}>
        <input
          type="number"
          name="hands"
          defaultValue={
            score[currentRoundIndex][currentPlayer].hands !== "0"
              ? score[currentRoundIndex][currentPlayer].hands
              : null
          }
          placeholder={BET_HANDS_INPUT}
        />
        <input type="number" name="score" placeholder={MADE_HANDS_INPUT} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RoundData;
