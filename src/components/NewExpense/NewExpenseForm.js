import React from "react";
import "./NewExpenseForm.css";
import { useState } from "react";

const NewExpenseForm = (props) => {
   const [expTitle, setExpTitle] = useState("");
   const [expAmount, setExpAmount] = useState("");
   const [expDate, setExpDate] = useState("");

   const titleChangeHandler = (event) => setExpTitle(event.target.value);
   const amountChangeHandler = (event) => setExpAmount(event.target.value);
   const dateChangeHandler = (event) => setExpDate(event.target.value);

   const submitHandler = (event) => {
      event.preventDefault(); //prevent http request
      const newExpense = {
         title: expTitle,
         amount: expAmount,
         date: new Date(expDate),
      };
      props.onSubmitExpense(newExpense);
      setExpTitle("");
      setExpAmount("");
      setExpDate("");
      props.onCloseForm();
   };

   return (
      <form onSubmit={submitHandler}>
         <div className="new-expense__controls">
            <div className="new-expense__control">
               <label>Title</label>
               <input
                  type="text"
                  onChange={titleChangeHandler}
                  value={expTitle}
               />
            </div>
            <div className="new-expense__control">
               <label>Cost</label>
               <input
                  type="number"
                  onChange={amountChangeHandler}
                  min="0.01"
                  step="0.01"
                  value={expAmount}
               ></input>
            </div>
            <div className="new-expense__control">
               <label>Transaction Date</label>
               <input
                  type="date"
                  onChange={dateChangeHandler}
                  min="2020-01-01"
                  max="2022-12-31"
                  value={expDate}
               ></input>
            </div>
         </div>
         <div className="new-expense__actions">
            <button onClick={props.onCloseForm}>Cancel</button>
            <button type="submit">Add Expense</button>
         </div>
      </form>
   );
};

export default NewExpenseForm;
