/* @jsx React.createElement */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter({ count, onClick }) {
  return (
    <button 
      type="button" 
      onClick={onClick}
    >
      Click me!
      (
      { count }
      )
    </button>
  );
}

// eslint-disable-next-line react/prop-types
function Button({ onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}  
    >
      {children}
    </button>
  );
}

function Buttons({ onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <Button 
          key={i}
          onClick={() => onClick(i)}
        >
          {i}
        </Button>
      ))}
    </p>
  );
}

function CountApp({ count, onClick, onNumberClick }) {
  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        onClick={onClick}
      />
      <Buttons 
        count={count}
        onClick={onNumberClick}
      />
    </div>
  );
}

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick() {
    setState({
      count: count + 1,
    });
  }

  function handleNumberClick(value) {
    setState({
      count: count + value,
    })
  }

  return (
    <div>
      <CountApp 
        count={count}
        onClick={handleClick}
        onNumberClick={handleNumberClick}
      />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);