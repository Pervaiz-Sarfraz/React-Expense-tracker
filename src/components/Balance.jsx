import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Balance() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div className=" text-black flex flex-col font-bold text-center">
      <h1>Your Balance:</h1>
      <p>${total}</p>
    </div>
  );
}

export default Balance;
