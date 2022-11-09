

import React from 'react'

export function MovesList({ moves , style }) {
  // const {moves} = loggedInUser
  return (
    <div className="moves-container">
      <h3>Your Moves:</h3>

      {moves.map((move) => (
        <div className="inner-moves" key={move.to._id + Math.random()}>
          <p>At: {move.datetime}</p>
          <p>Amount: {move.amount}$</p>
          <p>To: {move.to.name}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
