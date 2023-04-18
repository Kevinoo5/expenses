import React, {useState} from 'react';
import './App.css';

import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        date: new Date(2023,0,10),
        title: "New book",
        price: 30.99
    },
    {
        id: "e2",
        date: new Date(2023,0,10),
        title: "New jeans",
        price: 99.99
    }
]

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        console.log("In App.js");
        setExpenses((previousExpenses) => {
            return [expense, ...previousExpenses];
        })
    }
    console.log(expenses);

  return (
    <div className="App">
        <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
        <Expenses expenseData={DUMMY_EXPENSES}></Expenses>
    </div>
  );
}

export default App;
