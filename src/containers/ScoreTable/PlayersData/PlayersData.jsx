import React, { useState } from "react";

import "./playersData.css";

const PlayersData = ({
  setInGame,
  setPlayersName,
  setInputValue,
  inputValue,
  setScore,
  score,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setPlayersName((prevValue) => [...prevValue, event.target.player.value]);
    setInputValue("");
  };

  const handleStartGame = () => {
    setInGame(true);
    setScore(score);
  };

  return (
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
  );
};

export default PlayersData;
