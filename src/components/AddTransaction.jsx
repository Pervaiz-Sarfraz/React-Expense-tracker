import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random * 1000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };
  return (
    <div className="capitalize ">
      <h3 className="font-bold py-4">Add new transaction</h3>
      <form className="font-bold" onSubmit={onSubmit}>
        <div className="mt-2">
          <label htmlFor="text">type:</label>
          <br />
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            className="p-2 mt-2 rounded px-12"
          />
        </div>
        <div className="mt-2">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            className="p-2 mt-2 rounded px-12"
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
