import { React, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./ExpenseList.css";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseList = (props) => {
   const [yearFilter, setYearFilter] = useState("2020");

   const handleExpenseFilter = (year) => {
      setYearFilter(year);
   };

   const filteredExpenses = props.expenses.filter((expense) => {
      return expense.date.getFullYear().toString() === yearFilter;
   });

   return (
      <Card className="expense-list">
         <ExpenseFilter
            selected={yearFilter}
            onExpenseFilter={handleExpenseFilter}
         />
         {filteredExpenses.length === 0 && <p>No expenses found.</p>}

         {filteredExpenses.length > 0 &&
            filteredExpenses.map((expense) => (
               <ExpenseItem
                  key={expense.id}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
               />
            ))}
      </Card>
   );
};

export default ExpenseList;
