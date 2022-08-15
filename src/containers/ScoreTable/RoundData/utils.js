import { getAlert } from "../../../utils/showAlert";
import {
  ALERT,
  HANDS,
  SCORE,
  FINAL_HANDS,
  EMPTY_CELL,
  EMPTY_INPUT,
} from "./copy";

/**
 * @param {Array} rounds Array of rounds.
 */

export const utils = (
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
) => {
  const { showAlert } = getAlert(setAlert, setMessageAlert);
  const scoreRoute = score[currentRoundIndex][currentPlayer];
  const lastPlayer = playersNames.length;

  const handleSetScore = (currentValue, betOrFinalHands) => {
    setScore((prevVal) => ({
      ...prevVal,
      [currentRoundIndex]: {
        ...prevVal[currentRoundIndex],
        [currentPlayer]: {
          ...prevVal[currentRoundIndex][currentPlayer],
          [betOrFinalHands]: parseInt(currentValue),
        },
      },
    }));
  };

  const handleBetHands = (currentHandsBet) => {
    let { canAddBetHands } = checkLastPlayer(currentHandsBet);

    if (canAddBetHands) {
      if (currentHandsBet === EMPTY_INPUT) {
      } else if (parseInt(currentHandsBet) <= currentRound) {
        handleSetScore(currentHandsBet, HANDS);
      } else if (parseInt(currentHandsBet) > currentRound) {
        showAlert(ALERT.NUMBER_OF_HANDS);
      }
    }
  };

  const handleFinalHands = (currentFinalHands, currentHandsBet) => {
    let { finalHandsSum, betHandsSum, restrictedFinalHands } = checkLastPlayer(
      currentHandsBet,
      currentFinalHands
    );

    if (
      betHandsSum === 0 &&
      currentFinalHands !== EMPTY_INPUT &&
      !canAddFinalHands
    ) {
      showAlert(ALERT.BET_HANDS_FIRST);
    }

    if (canAddFinalHands) {
      let prevRoundScore = 0;

      if (currentRoundIndex > 0) {
        prevRoundScore = score[currentRoundIndex - 1][currentPlayer].score;
      }

      if (currentFinalHands === EMPTY_INPUT) {
      } else if (
        scoreRoute.hands === EMPTY_CELL ||
        finalHandsSum === EMPTY_INPUT
      ) {
        showAlert(ALERT.HANDS_VALUE);
      } else if (parseInt(currentFinalHands) <= currentRound) {
        handleSetScore(currentFinalHands, FINAL_HANDS);
        handleScore(scoreRoute, currentFinalHands, prevRoundScore);
      } else {
        showAlert(ALERT.NUMBER_OF_HANDS);
      }
    } else {
      showAlert(ALERT.BET_HANDS_FIRST);
    }

    if (
      restrictedFinalHands === currentRound &&
      scoreRoute.playerOrder === lastPlayer
    ) {
      setCurrentRoundIndex(currentRoundIndex + 1);
    }
  };

  const handleScore = (scoreRoute, currentFinalHands, prevRoundScore) => {
    if (parseInt(currentFinalHands) === scoreRoute.hands) {
      const playerScore = scoreRoute.hands + 5 + prevRoundScore;

      handleSetScore(playerScore, SCORE);
    } else if (parseInt(currentFinalHands) > scoreRoute.hands) {
      const playerScore =
        -parseInt(currentFinalHands) + scoreRoute.hands + prevRoundScore;

      handleSetScore(playerScore, SCORE);
    } else {
      const playerScore =
        parseInt(currentFinalHands) - scoreRoute.hands + prevRoundScore;

      handleSetScore(playerScore, SCORE);
    }
  };

  const checkLastPlayer = (currentHandsBet, currentFinalHands) => {
    let betHandsSum = 0;
    let finalHandsSum = 0;
    let canAddBetHands = true;
    let restrictedHands = 0;
    let restrictedFinalHands = 0;

    if (scoreRoute.playerOrder === lastPlayer) {
      playersNames.forEach((player) => {
        const scoreRoute = score[currentRoundIndex][player];

        if (
          scoreRoute.hands === EMPTY_CELL &&
          scoreRoute.playerOrder !== lastPlayer
        ) {
          canAddBetHands = false;
          showAlert(ALERT.PLAYER_ORDER);
        } else if (
          scoreRoute.hands !== EMPTY_CELL &&
          scoreRoute.playerOrder !== lastPlayer
        ) {
          betHandsSum += scoreRoute.hands;
        }

        if (canAddFinalHands && scoreRoute.finalHands !== EMPTY_CELL) {
          finalHandsSum += parseInt(scoreRoute.finalHands);
        }
      });

      if (betHandsSum !== 0) restrictedHands = currentRound - betHandsSum;

      if (finalHandsSum !== 0)
        restrictedFinalHands = finalHandsSum + parseInt(currentFinalHands);

      if (currentHandsBet !== EMPTY_CELL) {
        setCanAddFinalHands(true);
      }
    } else {
      canAddBetHands = true;
    }

    if (
      currentHandsBet === restrictedHands &&
      score[currentRoundIndex][currentPlayer].playerOrder === lastPlayer
    ) {
      showAlert(ALERT.LAST_PLAYER_HANDS);
      canAddBetHands = false;
    }
    if (currentRound < restrictedFinalHands) {
      showAlert(ALERT.FINAL_HANDS);
    }

    return {
      canAddBetHands,
      restrictedHands,
      finalHandsSum,
      betHandsSum,
      restrictedFinalHands,
    };
  };

  return { handleBetHands, handleFinalHands };
};
