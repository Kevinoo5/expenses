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

    const filteredExpenses = props.expenseData.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    let expensesContent = <p>No expenses found.</p>
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => {
            return <ExpenseItem
                id={expense.id}
                date={expense.date}
                title={expense.title}
                price={expense.price}
            ></ExpenseItem>
        })
    }

    return (
        <Card className="expenses">
            <ExpensesFilter
               selected={filteredYear} onExpenseFilter={filterChangesHandler}></ExpensesFilter>
            {expensesContent}
            })
        }
        </Card>
    )
}

export default Expenses;