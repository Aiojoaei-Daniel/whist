export const getDataGameStructure = (rounds, playersName) => {
  let dataGameStructure = {};

  rounds.map((_, index) => (dataGameStructure[index] = {}));
  rounds.map((_, index) => {
    playersName.map(
      (name) =>
        (dataGameStructure[index][name] = {
          hands: "0",
          finalHands: "0",
          score: "0",
        })
    );
  });
  return dataGameStructure;
};
