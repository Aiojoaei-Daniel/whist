import React from "react";
import Alert from "../../../components/Alert/Alert";

import "./playersData.css";

const PlayersData = ({
  setInGame,
  setPlayersName,
  setPlayersNameCopy,
  setInputValue,
  inputValue,
  setScore,
  score,
  setAlert,
  alert,
  playersName,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.player.value.length <= 2) {
      setPlayersName((prevValue) => [...prevValue, event.target.player.value]);
      setPlayersNameCopy((prevValue) => [
        ...prevValue,
        event.target.player.value,
      ]);
      setAlert(false);
      setInputValue("");
      console.log("am fost aici");
    } else {
      setInputValue("");
      setAlert(true);
      //sa apara alarma cu maxim 2 caractere
      console.log("mai incearca");
    }
  };

  const handleStartGame = () => {
    if (playersName.length >= 3) {
      setInGame(true);
      setScore(score);
      setAlert(false);
    } else {
      setInputValue("");
      setAlert(true);
      //sa apara alarma cu minim 3 playeri
      console.log("mai incearca start game");
      console.log(alert);
    }
  };

  return (
    <>
      {alert && <Alert />}
      <div className="players-data">
        <form className="form-data-players" onSubmit={handleSubmit}>
          <label htmlFor="player">Player name:</label>
          <input
            type="text"
            name="player"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button type="submit">Next Player</button>
          <button onClick={handleStartGame}>Start Game</button>
        </form>
      </div>
    </>
  );
};

export default PlayersData;
