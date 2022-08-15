import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import PlayersData from "./PlayersData/PlayersData";
import RoundData from "./RoundData/RoundData";
import Table from "./Table";
import Alert from "../../components/Alert/Alert";

import getRounds from "../../utils/getRounds";
import { RESET_ROUND_BTN } from "../../utils/copy";

import "./scoreTable.css";

const ScoreTable = () => {
  const [score, setScore] = useState({});

  const [playersNames, setPlayersNames] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState("");

  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);

  const [inputValue, setInputValue] = useState("");
  const [messageAlert, setMessageAlert] = useState("");

  const [alert, setAlert] = useState(false);
  const [inGame, setInGame] = useState(false);
  const [showScoreForm, setShowScoreForm] = useState(false);
  const [resetRound, setResetRound] = useState(false);
  const [canAddFinalHands, setCanAddFinalHands] = useState(false);

  const rounds = getRounds(playersNames.length);
  const currentRound = rounds[currentRoundIndex];

  const navigate = useNavigate();

  const handleNewGame = () => {
    setInGame(false);
    setPlayersNames([]);
    setScore({});
    setCurrentRoundIndex(0);
    setCanAddFinalHands(false);
  };

  const handleAddScore = (player) => {
    setShowScoreForm((prevValue) =>
      prevValue ? (prevValue = false) : (prevValue = true)
    );

    setCurrentPlayer(player);
    setResetRound(false);
  };

  const handleRoundIndex = () => {
    setShowScoreForm(false);
    setResetRound((prevValue) =>
      prevValue ? (prevValue = false) : (prevValue = true)
    );
  };

  const handleResetRound = () => {
    setResetRound((prevValue) =>
      prevValue ? (prevValue = false) : (prevValue = true)
    );

    setCanAddFinalHands(false);

    playersNames.forEach((player) => {
      setScore((prevVal) => ({
        ...prevVal,
        [currentRoundIndex]: {
          ...prevVal[currentRoundIndex],
          [player]: {
            ...prevVal[currentRoundIndex][player],
            hands: "0",
            score: "0",
            finalHands: "0",
          },
        },
      }));
    });
  };

  const handleReturn = () => {
    if (inGame) {
      setInGame(false);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="game-score">
      {alert && <Alert message={messageAlert} />}
      <button className="previous" onClick={handleReturn}>
        &#8249;
      </button>
      {!inGame ? (
        <PlayersData
          rounds={rounds}
          setAlert={setAlert}
          setScore={setScore}
          setInGame={setInGame}
          playersNames={playersNames}
          setPlayersNames={setPlayersNames}
          inputValue={inputValue}
          setInputValue={setInputValue}
          setMessageAlert={setMessageAlert}
        />
      ) : null}
      {resetRound && (
        <button onClick={handleResetRound} className="reset-btn">
          {RESET_ROUND_BTN} {currentRound} ({currentRoundIndex + 1})
        </button>
      )}
      {showScoreForm && (
        <RoundData
          score={score}
          setScore={setScore}
          currentRound={currentRound}
          playersNames={playersNames}
          currentPlayer={currentPlayer}
          currentRoundIndex={currentRoundIndex}
          setAlert={setAlert}
          setMessageAlert={setMessageAlert}
          setShowScoreForm={setShowScoreForm}
          canAddFinalHands={canAddFinalHands}
          setCanAddFinalHands={setCanAddFinalHands}
          setCurrentRoundIndex={setCurrentRoundIndex}
        />
      )}

      {inGame && (
        <Table
          score={score}
          rounds={rounds}
          playersNames={playersNames}
          handleAddScore={handleAddScore}
          handleRoundIndex={handleRoundIndex}
          currentRoundIndex={currentRoundIndex}
        />
      )}
      {inGame ? (
        <button className="new-game-btn" onClick={handleNewGame}>
          New game
        </button>
      ) : null}
    </div>
  );
};

export default ScoreTable;
