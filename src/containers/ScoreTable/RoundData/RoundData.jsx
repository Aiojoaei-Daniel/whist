import React from "react";

import "./roundData.css";

const RoundData = ({
  score,
  setScore,
  currentRoundIndex,
  currentPlayer,
  setRoundScore,
  setAlert,
  rounds,
  playersName,
  playersNameCopy,
  setNextRound,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const scoreCopy = score;

    const currentHandsBet = event.target.hands.value;
    let handsBetStorage = scoreCopy[currentRoundIndex][currentPlayer];
    const currentScore = event.target.score.value;
    let scoreStorage = scoreCopy[currentRoundIndex][currentPlayer];
    const round = rounds[currentRoundIndex];

    let oldRound = 0;

    if (currentRoundIndex > 0) {
      oldRound = scoreCopy[currentRoundIndex - 1][currentPlayer].score;
    }

    const playersCheck = playersNameCopy.filter(
      (player) => scoreCopy[currentRoundIndex][player].score !== "0"
    );

    if (currentHandsBet === "") {
    } else if (
      parseInt(currentHandsBet) <= round &&
      (playersCheck.length === playersNameCopy.lenght ||
        currentRoundIndex === 0) // mesaj pentru ca nu s a completat pt prima runda
    ) {
      handsBetStorage.hands = parseInt(currentHandsBet);
      playersNameCopy.push(playersNameCopy.shift());
      console.log(playersNameCopy);
    } else {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2500);
    }

    if (currentScore === "") {
    } else if (
      parseInt(currentScore) <= round &&
      handsBetStorage.hands !== "0"
    ) {
      // sa pun si aici mesaj ca nu s a completat campul cu cate maini umreaza sa faca
      if (parseInt(currentScore) === handsBetStorage.hands) {
        scoreStorage.score = handsBetStorage.hands + 5 + oldRound;
      } else if (parseInt(currentScore) > handsBetStorage.hands) {
        scoreStorage.score =
          -parseInt(currentScore) + handsBetStorage.hands + oldRound;
      } else {
        scoreStorage.score =
          parseInt(currentScore) - handsBetStorage.hands + oldRound;
      }
    } else {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2500);
    }
    let betHands = 0;
    playersNameCopy.map(
      (player) => (betHands += scoreCopy[currentRoundIndex][player].hands)
    );

    if (betHands === round) {
      // sa pun alt mesaj si sa setez pentru primu player
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2500);
      scoreCopy[currentRoundIndex][currentPlayer].hands = "0";
    }

    setScore(score);
    setRoundScore(false);
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
          placeholder="Câte mâini faci?"
        />
        <input type="number" name="score" placeholder="Câte mâini ai făcut?" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RoundData;
