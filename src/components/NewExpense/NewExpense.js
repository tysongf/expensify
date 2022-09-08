import React from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
   const submitExpenseHandler = (newExpense) => {
      const expenseData = {
         ...newExpense,
         id: Math.random().toString(),
      };
      props.onSubmitExpense(expenseData);
   };

   return (
      <div className="new-expense">
         <NewExpenseForm onSubmitExpense={submitExpenseHandler} />
      </div>
   );
};

export default NewExpense;
