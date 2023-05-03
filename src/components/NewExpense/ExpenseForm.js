import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enterdTitle, setEnteredTitle] = useState('');
    const [enterdAmount, setEnteredAmount] = useState('');
    const [enterdDate, setEnteredDate] = useState('');

    // const [userInput,setUserInput]=useState({
    //     enterdTitle:'',
    //     enterdAmount:'',
    //     enterdDate:'',
    // });
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput((prevState)=>{
        //     return {...prevState,enterdTitle:event.target.value};
        // });
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput((prevState)=>{
        //     return {...prevState,enterdAmount:event.target.value};
        // });
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput((prevState)=>{
        //     return {...prevState,enterdDate:event.target.value};
        // });
    };
    const submitHandler = (event) => {
        event.preventDefault();
        
        const expenseData = {
            title: enterdTitle,
            amount: enterdAmount,
            date: new Date(enterdDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense_controls">
                <div className="new-expense_control">
                    <label htmlFor="Title">Title</label>
                    <input type="text"
                        value={enterdTitle}
                        onChange={titleChangeHandler} />
                </div>
                <div className="new-expense_control">
                    <label htmlFor="Title">Amount</label>
                    <input type="number" min="0.01" step="0.01"
                        value={enterdAmount}
                        onChange={amountChangeHandler} />
                </div>
                <div className="new-expense_control">
                    <label htmlFor="Title">Date</label>
                    <input type="Date" min="2019-01-01" max="2023-12-31"
                        value={enterdDate}
                        onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense_actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};
export default ExpenseForm;