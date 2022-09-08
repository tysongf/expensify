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

   return (
      <Card className="expense-list">
         <ExpenseFilter
            selected={yearFilter}
            onExpenseFilter={handleExpenseFilter}
         />
         {props.expenses.map((expense) => (
            <ExpenseItem
               title={expense.title}
               amount={expense.amount}
               date={expense.date}
            />
         ))}
      </Card>
   );
};

export default ExpenseList;
