const getRounds = (rounds) => {
  const arr = [
    ...Array(rounds).fill(1),
    2,
    3,
    4,
    5,
    6,
    7,
    ...Array(rounds).fill(8),
    7,
    6,
    5,
    4,
    3,
    2,
    ...Array(rounds).fill(1),
  ];
  return arr;
};

export default getRounds;
