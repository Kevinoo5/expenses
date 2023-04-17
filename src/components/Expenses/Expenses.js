import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css"

function Expenses(props){

    const [filteredYear, setFilteredYear] = useState("2023");

    console.log("Year data in Expenses.js: " + filteredYear)

    const filterChangesHandler = (selectedYear) => {
        console.log("Filter change handled by Expenses.js!")
        setFilteredYear(selectedYear);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter onExpenseFilter={filterChangesHandler}></ExpensesFilter>
            <ExpenseItem expenseData={props.expenseData[0]}></ExpenseItem>
            <ExpenseItem expenseData={props.expenseData[1]}></ExpenseItem>
        </Card>
    )
}

export default Expenses;