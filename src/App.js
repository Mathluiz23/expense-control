import React, { useEffect, useState } from "react";
import StyleGlobal from "./styles/StyleGlobal";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Form from "./components/Form";

export default function App() {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(data ? JSON.parse(data) : []);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountExpense = transactionsList.filter((item) => item.expense)
      .map((transaction) => +transaction.amount);

    const amountIncome = transactionsList.filter((item) => !item.expense)
      .map((transaction) => +transaction.amount);

    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`€ ${income}`);
    setExpense(`€ ${expense}`);
    setTotal(`${+income < +expense ? "-" : ""} € ${total}`);
  }, [transactionsList]);

  function handleAdd (transaction) {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };

  return (
    <>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
      <StyleGlobal />
    </>
  );
};
