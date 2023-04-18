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
            <ExpensesFilter
               selected={filteredYear} onExpenseFilter={filterChangesHandler}></ExpensesFilter>
            {
            props.expenseData.filter(expense => expense.date.getFullYear().toString() === filteredYear).map((expense) => {
                return <ExpenseItem
                    id={expense.id}
                    date={expense.date}
                    title={expense.title}
                    price={expense.price}
                ></ExpenseItem>
            })
        }
        </Card>
    )
}

export default Expenses;