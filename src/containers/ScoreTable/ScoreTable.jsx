import React, { useState } from "react";

import PlayersData from "./PlayersData/PlayersData";
import RoundData from "./RoundData/RoundData";

import getRounds from "../../utils/getRounds";

import "./scoreTable.css";

const ScoreTable = () => {
  const [inGame, setInGame] = useState(false);
  const [playersName, setPlayersName] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [roundScore, setRoundScore] = useState(false);
  const rounds = getRounds(playersName.length);
  const [currentRound, setCurrentRound] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState();

  let score1 = {};
  rounds.map((_, index) => (score1[index] = {}));
  rounds.map((_, index) => {
    playersName.map((name) => (score1[index][name] = { hands: 0, score: 0 }));
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
    setCurrentRound(index);
    setCurrentPlayer(player);
  };

  return (
    <>
      {!inGame ? (
        <PlayersData
          setPlayersName={setPlayersName}
          setInputValue={setInputValue}
          setInGame={setInGame}
          inputValue={inputValue}
          setScore={setScore}
          score={score1}
        />
      ) : null}
      {roundScore && (
        <RoundData
          score={score}
          setScore={setScore}
          currentRound={currentRound}
          currentPlayer={currentPlayer}
          setRoundScore={setRoundScore}
        />
      )}
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
                  <td className="round-numbers" style={{ color: "white" }}>
                    {round}
                  </td>
                  {playersName.map((name, nameIndex) => (
                    <td
                      key={index + name}
                      className="score1"
                      style={{
                        border:
                          (index - nameIndex) % playersName.length === 0
                            ? "2px solid red"
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
                        <p>{score[index][name].hands}</p>
                        <p>{score[index][name].score}</p>
                      </div>
                    </td>
                  ))}

                  {/* {playersName.push(playersName.shift()) && false} */}
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
