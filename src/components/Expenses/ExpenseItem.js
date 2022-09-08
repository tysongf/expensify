import React, { useState } from "react";

import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
   const [title, setTitle] = useState(props.title);

   const clickHandler = () => {
      setTitle("Beep");
   };

   return (
      <Card className="expense-item">
         <ExpenseDate date={props.date}></ExpenseDate>
         <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${props.amount}</div>
            <button onClick={clickHandler}>Delete</button>
         </div>
      </Card>
   );
};

export default ExpenseItem;
