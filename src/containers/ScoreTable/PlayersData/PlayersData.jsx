import React from "react";

import { getDataGameStructure } from "../../../utils/getDataGameStructure";

import Alert from "../../../components/Alert/Alert";
import {
  PLAYER_NAME_LABEL,
  NEXT_PLAYER_BTN,
  START_GAME_BTN,
  ALERT,
} from "./copy";

import "./playersData.css";

const PlayersData = ({
  rounds,
  alert,
  setAlert,
  setScore,
  setInGame,
  playersName,
  setPlayersName,
  inputValue,
  setInputValue,
  messageAlert,
  setMessageAlert,
}) => {
  const dataGameStructure = getDataGameStructure(rounds, playersName);

  const handleSubmit = (event) => {
    event.preventDefault();

    const playerName = event.target.player.value;
    const playerNameLength = playerName.length;
    const [playerNameLengthMin, playerNameLengthMax] = [1, 3];

    if (
      playerNameLengthMin <= playerNameLength &&
      playerNameLength <= playerNameLengthMax
    ) {
      setPlayersName((prevValue) => [...prevValue, playerName]);

      setAlert(false);

      setInputValue("");
    } else {
      setAlert(true);

      setMessageAlert(ALERT.PLAYER_NAME);
    }
  };

  const handleStartGame = () => {
    const playersNumber = playersName.length;
    const [minPlayersNumber, maxPlayersNumber] = [3, 6];

    if (
      playersNumber >= minPlayersNumber &&
      playersNumber <= maxPlayersNumber
    ) {
      setInGame(true);
      setScore(dataGameStructure);
      setInputValue("");

      setAlert(false);
    } else {
      setAlert(true);
      setMessageAlert(ALERT.PLAYERS_NUMBER);
    }
  };

  return (
    <>
      {alert && <Alert message={messageAlert} />}
      <div className="players-data">
        <form className="form-data-players" onSubmit={handleSubmit}>
          <label htmlFor="player">{PLAYER_NAME_LABEL}</label>
          <input
            type="text"
            name="player"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button type="submit">{NEXT_PLAYER_BTN}</button>
        </form>
        <button onClick={handleStartGame}>{START_GAME_BTN}</button>
      </div>
    </>
  );
};

export default PlayersData;
