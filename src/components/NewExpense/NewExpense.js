import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    const [formEdit, setFormEdit] = useState(false);

    const formEditHandler = () => {
        setFormEdit(true);
    }

    const resetFormEditHandler = () => {
        setFormEdit(false);
    }

    return (
        formEdit ? <div className="new-expense"><ExpenseForm onSaveExpenseData={saveExpenseDataHandler} resetForm={resetFormEditHandler}/></div> : <div className="new-expense"> <button onClick={formEditHandler}>Add New Expense</button> </div>
            )


}

export default NewExpense;