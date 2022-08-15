const getRounds = (playersNumber) => {
  // create an array of rounds depending on the number of players
  const arr = [
    ...Array(playersNumber).fill(1),
    2,
    3,
    4,
    5,
    6,
    7,
    ...Array(playersNumber).fill(8),
    7,
    6,
    5,
    4,
    3,
    2,
    ...Array(playersNumber).fill(1),
  ];
  return arr;
};

export default getRounds;
