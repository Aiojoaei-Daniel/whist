import { DELAY_ALERT } from "../../../utils/copy";

export const utils = (setAlert, setMessageAlert) => {
  const showAlert = (message) => {
    setAlert(true);
    setMessageAlert(message);
    setTimeout(() => {
      setAlert(false);
    }, DELAY_ALERT);
  };

  const setBetHands = (currentHandsBet, betHands, currentRound, message) => {
    if (currentHandsBet === "") {
    } else if (parseInt(currentHandsBet) <= currentRound) {
      betHands.hands = parseInt(currentHandsBet);
    } else {
      showAlert(message);
    }
  };

  const setPlayerScore = (
    betHands,
    scoreStorage,
    currentScore,
    currentRoundIndex,
    currentPlayer,
    currentRound,
    scoreCopy,
    alertHandsValue,
    alertHandsNumber
  ) => {
    let prevRoundScore = 0;

    if (currentRoundIndex > 0) {
      prevRoundScore = scoreCopy[currentRoundIndex - 1][currentPlayer].score;
    }

    if (currentScore === "") {
    } else if (betHands.hands === "0") {
      showAlert(alertHandsValue);
    } else if (parseInt(currentScore) <= currentRound) {
      scoreStorage.finalHands = parseInt(currentScore);
      if (parseInt(currentScore) === betHands.hands) {
        scoreStorage.score = betHands.hands + 5 + prevRoundScore;
      } else if (parseInt(currentScore) > betHands.hands) {
        scoreStorage.score =
          -parseInt(currentScore) + betHands.hands + prevRoundScore;
      } else {
        scoreStorage.score =
          parseInt(currentScore) - betHands.hands + prevRoundScore;
      }
    } else {
      showAlert(alertHandsNumber);
    }
  };

  return { showAlert, setBetHands, setPlayerScore };
};
