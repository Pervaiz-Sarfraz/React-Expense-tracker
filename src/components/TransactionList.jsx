import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Transaction from "./Transaction";

function TransactionList() {
  const { transactions } = useContext(GlobalContext);
  return (
    <div className="flex flex-col justify-center items-center font-bold capitalize">
      <h1 className="text-xl py-3 ">Transactions</h1>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
