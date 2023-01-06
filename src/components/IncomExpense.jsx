import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "$ " +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}
function IncomExpense() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;
  return (
    <>
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl uppercase shadow-2xl shadow-blue-500 p-6 flex justify-between my-2  text-white m-2">
        <div>
          <h1 className="font-bold">income</h1>
          <p className="text-green-400 text-lg">{moneyFormatter(income)}</p>
        </div>
        <div>
          <h1 className="font-bold">Expenses</h1>
          <p className="text-green-400 text-lg">{moneyFormatter(expense)}</p>
        </div>
      </div>
    </>
  );
}

export default IncomExpense;
