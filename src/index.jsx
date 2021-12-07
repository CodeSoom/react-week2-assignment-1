/* @jsx React.createElement */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Button({ children, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}

function Counter({ count, onClick }) {
  const number = 1;

  return (
    <Button
      onClick={() => onClick(number)}
    >
      Click me!
      (
      {count}
      )
    </Button>
  );
}

function Numbers({ onClick }) {
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

function Page({ count, onClick }) {
  return (
    <div>
      <p>Counter!</p>
      <Counter
        count={count}
        onClick={onClick}
      />
      <Numbers
        onClick={onClick}
      />
    </div>
  );
}

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick(number) {
    setState({
      count: count + number,
    });
  }

  return (
    <Page
      count={count}
      onClick={(number) => handleClick(number)}
    />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
