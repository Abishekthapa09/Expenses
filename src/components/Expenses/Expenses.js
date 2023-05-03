import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import React from 'react';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2022');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    return (
        <div>
            <Card ClassName='expenses'>
                <ExpensesFilter selected={filteredYear}
                 onChangeFilter={filterChangeHandler}>
                 </ExpensesFilter>

                {props.items.map((Expenses) => (
                    <ExpenseItem title={Expenses.title}
                        amount={Expenses.amount}
                        date={Expenses.date}/>
                        ))};

            </Card>
        </div>
    );
}
export default Expenses;