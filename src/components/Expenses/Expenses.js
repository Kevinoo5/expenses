import React, {useState} from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css"
import ExpensesList from "./ExpensesList";

function Expenses(props){

    const [filteredYear, setFilteredYear] = useState("2023");

    console.log("Year data in Expenses.js: " + filteredYear)

    const filterChangesHandler = (selectedYear) => {
        console.log("Filter change handled by Expenses.js!")
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.expenseData.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <Card className="expenses">
            <ExpensesFilter onExpenseFilter={filterChangesHandler}></ExpensesFilter>
            <ExpensesList filteredExpenses={filteredExpenses}></ExpensesList>
        </Card>
    )
}

export default Expenses;