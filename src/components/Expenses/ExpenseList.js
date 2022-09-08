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
         <ExpenseItem
            title={props.expenses[0].title}
            amount={props.expenses[0].amount}
            date={props.expenses[0].date}
         />
         <ExpenseItem
            title={props.expenses[1].title}
            amount={props.expenses[1].amount}
            date={props.expenses[1].date}
         />
         <ExpenseItem
            title={props.expenses[2].title}
            amount={props.expenses[2].amount}
            date={props.expenses[2].date}
         />
         <ExpenseItem
            title={props.expenses[3].title}
            amount={props.expenses[3].amount}
            date={props.expenses[3].date}
         />
      </Card>
   );
};

export default ExpenseList;
