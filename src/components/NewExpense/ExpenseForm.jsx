import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const [displayBtn, setdisplayBtn] = useState(true);

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setdisplayBtn(true);
  };

  const displayBtnHandler = () => {
    setdisplayBtn(false);
  };
  const cancleBtnHandler = () => {
    setdisplayBtn(true);
  };

  return (
    <>
      <div
        style={{ display: displayBtn === false ? "none" : "block" }}
        className="add-expense__btn"
      >
        <button onClick={displayBtnHandler}>Add New Expense</button>
      </div>

      <form
        style={{ display: displayBtn === true ? "none" : "block" }}
        onSubmit={submitHandler}
      >
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="Title">Title</label>
            <input
              value={enteredTitle}
              type="text"
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="Amount">Amount</label>
            <input
              value={enteredAmount}
              type="number"
              onChange={amountChangeHandler}
              min="0.01"
              step="0.01"
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="Date">Date</label>
            <input
              value={enteredDate}
              type="date"
              onChange={dateChangeHandler}
              min="2021-01-01"
              max="2022-12-31"
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={cancleBtnHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
