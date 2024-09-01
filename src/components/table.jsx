import React from "react";

const Table = ({ data }) => {
  console.log('Table data:', data);
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Icon</th>
            <th>You</th>
            <th>Avg. Player</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, key) => (
            <tr key={key}>
              <td>
                <div className="icon-cell">
                  <img src={val.img} alt={val.icon} style={{ width: "20px", height: "20px", marginRight: "10px" }} />
                  {val.icon}
                </div>
              </td>
              <td>{val.you}</td>
              <td>{val.player}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
