
import React from "react";



export function TransferFund({ contact, addMove, props }) {
 
  var amount;
  const handleChange = ({ target }) => {
    amount = target.value;
  };

  const onAddMove = () => {
    if (!amount) return;
    addMove(+amount, contact);
    props.history.push('/')
  };

  return (
    <section className="transfer-fund">
      <h2>Transfer coins to {contact.name}</h2>
      <input
        onChange={handleChange}
        type="text"
        placeholder="How much to transfer?"
      />
      <button onClick={onAddMove} className="transfer-btn">
        SEND
      </button>
    </section>
  );
}

