export const getDataGameStructure = (rounds, playersName) => {
  const emptyCell = "0";
  let dataGameStructure = {};

  let playersOrder = Array.from(
    { length: playersName.length },
    (_, i) => i + 1
  );

  // create round property for dataGameSructure object
  rounds.forEach((_, round) => (dataGameStructure[round] = {}));

  // create players properties
  rounds.forEach((_, roundIndex) => {
    playersName.forEach(
      (name, playerIndex) =>
        (dataGameStructure[roundIndex][name] = {
          hands: emptyCell,
          finalHands: emptyCell,
          score: emptyCell,
          playerOrder: playersOrder[playerIndex],
        })
    );

    // change the order of players for each round
    playersOrder.unshift(playersOrder.pop());
  });

  return dataGameStructure;
};
