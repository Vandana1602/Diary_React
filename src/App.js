import React from 'react';
import Expenses from './components/Expenses/Expenses';

const App = () => {

  const expenses = [
    { 
      id: 'e1',
      title: 'Car Insurance', 
      amount:234.67, 
      date: new Date(2022,11, 21),
    },
    { 
      id: 'e2',
      title: 'Toilet Paper', 
      amount:24.67, 
      date: new Date(2020,1, 24)
    },
    { 
      id: 'e3',
      title: 'New Desk(wooden)', 
      amount:434.67, 
      date: new Date(2012,10, 11)
    },
    { 
      id: 'e4',
      title: 'New TV', 
      amount:2234.67, 
      date: new Date(2029,8, 13),
    },
  ];

//   return React.createElement('div', 
//   {}, 
//   React.createElement('h2', {}, "Let's get started!!!"),  // built-in component
//   React.createElement(Expenses, {items: expenses})    // custom component
//   );
// /* createElement takes 3 arguments:-
// 1. 1st argument is the element which should be created. EX: DIV (pass in string if it's built in HTML element)
// 2. 2nd argum is obj. that configure this element
// 3. 3rd argum is content
// */


// JSX CODE:--
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );


}

export default App;


// we can reuse js function by accepting parameters
// we can reuse our components by using parameters and a concept called props in react.
// components can't just use data stored in other components. But by using props we can pass data to he custom component by adding an attribute(quality & characterisitic of things).
// Props stands for properties, we can set peooperties of our own custom components.
// Components can't just use data stored in other components.
// the main idea behind props is to ake sure that we can pass data into our components to make them configurable and reusable.