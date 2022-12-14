import { React, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./ExpenseList.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const ExpenseList = (props) => {
   const [yearFilter, setYearFilter] = useState("2020");

   const handleExpenseFilter = (year) => {
      setYearFilter(year);
   };

   const filteredExpenses = props.expenses.filter((expense) => {
      return expense.date.getFullYear().toString() === yearFilter;
   });

   let expensesContent = (
      <h2 className="expenses-list__fallback">No expenses found.</h2>
   );
   if (filteredExpenses.length > 0) {
      expensesContent = filteredExpenses.map((expense) => (
         <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
         />
      ));
   }

   return (
      <Card className="expense-list">
         <ExpensesChart filteredExpenses={filteredExpenses} />
         <ExpenseFilter
            selected={yearFilter}
            onExpenseFilter={handleExpenseFilter}
         />
         {expensesContent}
      </Card>
   );
};

export default ExpenseList;
