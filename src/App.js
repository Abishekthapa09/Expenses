import Expenses from './components/Expenses/Expenses';
import React,{useState} from 'react';
import './home.css';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'TV',
    amount: 945.34,
    date: new Date(2021, 4, 1),
  },
  {
    id: 'e2',
    title: 'Car Insurence',
    amount: 554.4,
    date: new Date(2021, 4, 16),
  },
  {
    id: 'e3',
    title: 'Laptop',
    amount: 999.99,
    date: new Date(2022, 1, 15),
  },
];

  const App=()=>{
    const [expenses,setExpenses]=useState(DUMMY_EXPENSES);
  const addExpenseHandler=(expense)=>{
    setExpenses((prevExpenses)=>{
      return [expense,...prevExpenses];
    });
  };
  return (
    <div>
     <NewExpense onAddExpense={addExpenseHandler}/>
     <Expenses items={expenses}/>
    </div>
  );
  };

export default App;
//some test datas commented out