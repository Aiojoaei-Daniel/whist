import React from "react";
import PropTypes from "prop-types";

import { getDataGameStructure } from "../../../utils/getDataGameStructure";
import { getAlert } from "../../../utils/showAlert";
import {
  PLAYER_NAME_LABEL,
  NEXT_PLAYER_BTN,
  START_GAME_BTN,
  INPUT_PLACEHOLDER,
  MIN_MAX_PLAYERS_NUMBER,
  NO_PLAYERS,
  ALERT,
} from "./copy";

import "./playersData.css";

const PlayersData = ({
  rounds,
  setAlert,
  setScore,
  setInGame,
  playersNames,
  setPlayersNames,
  inputValue,
  setInputValue,
  setMessageAlert,
}) => {
  const { showAlert } = getAlert(setAlert, setMessageAlert);

  const handleSubmit = (event) => {
    event.preventDefault();

    // check the number of players and the length of each player name
    if (playersNames.length < 6) {
      const playerName = event.target.player.value;
      const playerNameLength = playerName.length;
      const [minLength, maxLength] = [1, 3];

      if (minLength <= playerNameLength && playerNameLength <= maxLength) {
        setPlayersNames((prevValue) => [...prevValue, playerName]);
        setInputValue("");
      } else {
        showAlert(ALERT.PLAYER_NAME);
      }
    } else {
      showAlert(ALERT.PLAYERS_NUMBER);
    }
  };

  const handleStartGame = () => {
    const playersNumber = playersNames.length;
    const minPlayersNumber = 3;
    const dataGameStructure = getDataGameStructure(rounds, playersNames);

    if (minPlayersNumber <= playersNumber) {
      setInGame(true);
      setScore(dataGameStructure);
    } else {
      showAlert(ALERT.PLAYERS_NUMBER);
    }
  };

  return (
    <div className="players-data">
      <div className="players-names">
        {playersNames.length === 0 && (
          <p className="player-number-info">{NO_PLAYERS}</p>
        )}
        {playersNames.length !== 0
          ? playersNames.map((player, index) => (
              <p className="player-name" key={index}>
                Player {index + 1}: {player}
              </p>
            ))
          : null}
      </div>
      <p className="player-number-info">{MIN_MAX_PLAYERS_NUMBER}</p>
      <div className="players-input">
        <form className="form-data-players" onSubmit={handleSubmit}>
          <label htmlFor="player">{PLAYER_NAME_LABEL}</label>
          <input
            type="text"
            name="player"
            placeholder={INPUT_PLACEHOLDER}
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button className="next-player-btn" type="submit">
            {NEXT_PLAYER_BTN}
          </button>
        </form>
        <button className="start-game-btn" onClick={handleStartGame}>
          {START_GAME_BTN}
        </button>
      </div>
    </div>
  );
};

PlayersData.propTypes = {
  rounds: PropTypes.array,
  setAlert: PropTypes.func,
  setScore: PropTypes.func,
  setInGame: PropTypes.func,
  playersNames: PropTypes.array,
  setPlayersNames: PropTypes.func,
  inputValue: PropTypes.string,
  setInputValue: PropTypes.func,
  messageAlert: PropTypes.string,
  setMessageAlert: PropTypes.func,
};

export default PlayersData;
