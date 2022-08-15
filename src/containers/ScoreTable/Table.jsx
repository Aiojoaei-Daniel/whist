import PropTypes from "prop-types";

import "./scoreTable.css";

const Table = ({
  score,
  rounds,
  playersNames,
  handleAddScore,
  handleRoundIndex,
  currentRoundIndex,
}) => {
  return (
    <table className="table-page">
      <thead>
        <tr>
          <th className="table-header">RND</th>
          {playersNames.length > 2
            ? playersNames.map((name, index) => (
                <th
                  key={index}
                  className="table-header"
                  style={{
                    backgroundColor: "purple ",
                    color: "white",
                    borderRight: "2px solid white",
                  }}
                >
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
              className="round-number"
              style={{
                border: index % 2 !== 0 ? "2px solid white" : null,
                color: currentRoundIndex === index ? "black" : "white",
              }}
              onClick={() => handleRoundIndex()}
            >
              {round}
            </td>
            {playersNames.map((name, nameIndex) => (
              <td key={index + name} className="score-cells">
                <div
                  className="score-cell"
                  onClick={() => handleAddScore(name)}
                  style={{
                    border: index % 2 !== 0 ? "4px solid purple" : null,
                    borderRight:
                      index % 2 !== 0 ? "4px solid purple" : "2px solid purple",
                    borderLeft: "0",
                  }}
                >
                  <p
                    style={{
                      color:
                        score[index][name].hands !== "0"
                          ? "darkviolet"
                          : "thistle",
                      borderTop:
                        (index - nameIndex) % playersNames.length === 0
                          ? "2px solid purple"
                          : null,
                    }}
                  >
                    {score[index][name].hands}
                  </p>
                  <p
                    style={{
                      color:
                        score[index][name].score !== "0"
                          ? "darkviolet"
                          : "	thistle",
                      borderTop:
                        (index - nameIndex) % playersNames.length === 0
                          ? "2px solid purple"
                          : null,
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
  );
};

Table.propTypes = {
  score: PropTypes.object,
  rounds: PropTypes.array,
  playersNames: PropTypes.array,
  handleAddScore: PropTypes.func,
  handleRoundIndex: PropTypes.func,
  currentRoundIndex: PropTypes.number,
};

export default Table;
