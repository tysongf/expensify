import { React, useState } from "react";
import "./NewExpense.css";
import NewExpenseButton from "./NewExpenseButton";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
   const [formOpen, setFormOpen] = useState(0);

   const submitExpenseHandler = (newExpense) => {
      const expenseData = {
         ...newExpense,
         id: Math.random().toString(),
      };
      props.onSubmitExpense(expenseData);
   };

   const showNewExpenseForm = () => {
      setFormOpen(true);
   };
   const hideExpenseForm = () => setFormOpen(false);

   let newExpenseContent = (
      <NewExpenseButton onAddButtonClick={showNewExpenseForm} />
   );

   if (formOpen) {
      newExpenseContent = (
         <NewExpenseForm
            onSubmitExpense={submitExpenseHandler}
            onCloseForm={hideExpenseForm}
         />
      );
   }

   return <div className="new-expense">{newExpenseContent}</div>;
};

export default NewExpense;
