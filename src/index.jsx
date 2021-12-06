/* @jsx React.createElement */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter({ count, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Click me!
      (
      {count}
      )
    </button>
  );
}

function Button({ children, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}

function Buttons({ onClick }) {
  return (
    <div>
      <p>
        {[1, 2, 3, 4, 5].map((i) => (
          <Button
            onClick={onClick}
          >
            {i}
          </Button>
        ))}
      </p>
    </div>
  );
}

function Page({ count, onClick }) {
  return (
    <div>
      <p>Counter!</p>
      <Counter
        count={count}
        onClick={onClick}
      />
      <Buttons
        onClick={onClick}
      />
    </div>
  );
}

function App() {
  const [state, setState] = useState({
    count: 0,
    number: 0,
  });

  const { count, number } = state;

  function handleClick() {
    setState({
      count: count + 1,
    });
  }

  return (
    <Page
      count={count}
      number={number}
      onClick={handleClick}
    />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
