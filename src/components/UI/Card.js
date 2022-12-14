import './Card.css';
import React from 'react';

const Card = (props) => {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}

export default Card;


// React Core Syntax & JSX
// Working with Components
// Working with Data => shared the data across components through that props concept.

// JSX, How to organize our files, and how to write functions here?
