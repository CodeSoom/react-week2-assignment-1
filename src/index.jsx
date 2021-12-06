/* @jsx React.createElement */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter({ count, number, onClick }) {
  return (
    <button type="button" onClick={() => onClick(number)}>
      Click me!
      (
      {count}
      )
    </button>
  );
}

function Button({ children, number, onClick }) {
  return (
    <button type="button" onClick={() => onClick(number)}>
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
            key={i}
            number={i}
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
        number={1}
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
  });

  const { count } = state;

  function handleClick({ number }) {
    setState({
      count: count + number,
    });
  }

  return (
    <Page
      count={count}
      onClick={(number) => handleClick({ number })}
    />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
