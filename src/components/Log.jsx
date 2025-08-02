import React from 'react';

const Log = ({ turns }) => {
  return (
    <ol id="log">
      {turns.map(turn => (
        <li key={`${turn.Player}_${turn.square.row}}_${turn.square.col}`}>
          {turn.player} selected {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;
