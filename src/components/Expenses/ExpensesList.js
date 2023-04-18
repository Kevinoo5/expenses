import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
    if (props.filteredExpenses.length === 0) {
        return <p className="expenses-list__fallback">No expenses found.</p>
    }

    return (
        <ul className="expenses-list">
            {
                props.filteredExpenses.map((expense) => {
                return <ExpenseItem
                    key={expense.id}
                    date={expense.date}
                    title={expense.title}
                    price={expense.price}
                ></ExpenseItem>
                })
            }
        </ul>
    )
}


export default ExpensesList;