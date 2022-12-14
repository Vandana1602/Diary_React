import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card.css';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title); 


    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    }; 
    return (
     <card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <h2>{title}</h2>
        <div className='expense-item__discription'>
        <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick = {clickHandler}> Change Title</button>
     </card>
     // added eventlistner to a react element on 17th line
    );
}
export default ExpenseItem;


