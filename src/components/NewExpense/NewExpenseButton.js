import React from "react";

const NewExpenseButton = (props) => {
   return <button onClick={props.onAddButtonClick}>💸 Add Expense</button>;
};

export default NewExpenseButton;
