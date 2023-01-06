import React from "react";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomExpense from "./components/IncomExpense";
import TransactionList from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <div className="m-auto border-2  w-[30%] p-3 bg-blue-100 my-24 rounded-3xl">
        <Header />
        <Balance />
        <IncomExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
