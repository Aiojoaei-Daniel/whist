import React, { useState } from "react";

import PlayersData from "./PlayersData/PlayersData";
import RoundData from "./RoundData/RoundData";
import Alert from "../../components/Alert/Alert";

import getRounds from "../../utils/getRounds";

import "./scoreTable.css";

const ScoreTable = () => {
  const [inGame, setInGame] = useState(false);
  const [playersName, setPlayersName] = useState([]);
  const [playersNameCopy, setPlayersNameCopy] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [roundScore, setRoundScore] = useState(false);
  const rounds = getRounds(playersName.length);
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState();
  const [alert, setAlert] = useState(false);
  const [nextRound, setNextRound] = useState(false);
  let score1 = {};

  rounds.map((_, index) => (score1[index] = {}));
  rounds.map((_, index) => {
    playersName.map(
      (name) => (score1[index][name] = { hands: "0", score: "0" })
    );
  });
  const [score, setScore] = useState(score1); // !

  const handleNewGame = () => {
    setInGame(false);
    setPlayersName([]);
  };

  const handleAddScore = (index, player) => {
    setRoundScore((prevValue) =>
      prevValue ? (prevValue = false) : (prevValue = true)
    );
    setCurrentPlayer(player);
    setCurrentRoundIndex(index);
  };

  const handleRoundIndex = (index) => {
    setCurrentRoundIndex(index);
  };

  return (
    <>
      {!inGame ? (
        <PlayersData
          setPlayersName={setPlayersName}
          setPlayersNameCopy={setPlayersNameCopy}
          setInputValue={setInputValue}
          setInGame={setInGame}
          inputValue={inputValue}
          setScore={setScore}
          score={score1}
          setAlert={setAlert}
          alert={alert}
          playersName={playersName}
        />
      ) : null}
      {roundScore && (
        <RoundData
          score={score}
          setScore={setScore}
          currentRoundIndex={currentRoundIndex}
          currentPlayer={currentPlayer}
          setRoundScore={setRoundScore}
          setAlert={setAlert}
          rounds={rounds}
          playersName={playersName}
          playersNameCopy={playersNameCopy}
          setNextRound={setNextRound}
        />
      )}
      {alert && <Alert />}
      {inGame && (
        <div className="table-body">
          <table>
            <thead>
              <tr>
                <th className="table-header">Rnd</th>
                {playersName.length > 2
                  ? playersName.map((name, index) => (
                      <th key={index} className="table-header">
                        {name}
                      </th>
                    ))
                  : null}
              </tr>
            </thead>
            <tbody>
              {rounds.map((round, index) => (
                <tr key={index}>
                  <td
                    className="round-numbers"
                    style={{
                      color: currentRoundIndex === index ? "red" : "white",
                      textAlign: "center",
                    }}
                    onClick={() => handleRoundIndex(index)}
                  >
                    {round}
                  </td>
                  {playersName.map((name, nameIndex) => (
                    <td
                      key={index + name}
                      className="score1"
                      style={{
                        border:
                          (index - nameIndex) % playersName.length === 0
                            ? "2px solid green"
                            : null,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                        onClick={() => handleAddScore(index, name)}
                      >
                        <p
                          style={{
                            color:
                              score[index][name].hands !== "0" ? "green" : null,
                          }}
                        >
                          {score[index][name].hands}
                        </p>
                        <p
                          style={{
                            color:
                              score[index][name].score !== "0" ? "green" : null,
                          }}
                        >
                          {score[index][name].score}
                        </p>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {inGame ? <button onClick={handleNewGame}>New game</button> : null}
    </>
  );
};

export default ScoreTable;
