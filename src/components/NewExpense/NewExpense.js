import React from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
   return (
      <div className="new-expense">
         <NewExpenseForm onSubmitExpense={props.onSubmitExpense} />
      </div>
   );
};

export default NewExpense;
