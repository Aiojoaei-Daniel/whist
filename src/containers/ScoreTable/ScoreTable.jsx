import React, { useState } from "react";

import PlayersData from "./PlayersData/PlayersData";
import RoundData from "./RoundData/RoundData";
import Alert from "../../components/Alert/Alert";

import getRounds from "../../utils/getRounds";

import "./scoreTable.css";

const ScoreTable = () => {
  const [score, setScore] = useState();
  const [playersName, setPlayersName] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState();
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [alert, setAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inGame, setInGame] = useState(false);
  const [showScoreForm, setShowScoreForm] = useState(false);
  const [count, setCount] = useState(0);

  const rounds = getRounds(playersName.length);

  const handleNewGame = () => {
    setInGame(false);
    setPlayersName([]);
  };

  const handleAddScore = (index, player) => {
    setShowScoreForm((prevValue) =>
      prevValue ? (prevValue = false) : (prevValue = true)
    );

    setCurrentPlayer(player);
    setCurrentRoundIndex(index);
  };

  const handleRoundIndex = (index) => {
    setCurrentRoundIndex(index);
    setCount(0);
    playersName.forEach((player) => {
      score[currentRoundIndex][player].hands = "0";
      score[currentRoundIndex][player].score = "0";
      score[currentRoundIndex][player].finalHands = "0";
    });
  };

  return (
    <>
      {!inGame ? (
        <PlayersData
          rounds={rounds}
          alert={alert}
          setAlert={setAlert}
          setScore={setScore}
          setInGame={setInGame}
          playersName={playersName}
          setPlayersName={setPlayersName}
          inputValue={inputValue}
          setInputValue={setInputValue}
          messageAlert={messageAlert}
          setMessageAlert={setMessageAlert}
        />
      ) : null}
      {showScoreForm && (
        <RoundData
          score={score}
          setScore={setScore}
          rounds={rounds}
          playersName={playersName}
          currentPlayer={currentPlayer}
          currentRoundIndex={currentRoundIndex}
          setAlert={setAlert}
          setMessageAlert={setMessageAlert}
          setShowScoreForm={setShowScoreForm}
          count={count}
          setCount={setCount}
        />
      )}

      {alert && <Alert message={messageAlert} />}
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
