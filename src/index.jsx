/* @jsx React.createElement */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter({ count, onClick }) {
  return (
    <button type="button" onClick={() => onClick(0)}>
      Click me!
      (
      {count}
      )
    </button>
  );
}

function Button({ keyNumber, onClick }) {
  return (
    <button type="button" onClick={() => onClick(keyNumber)}>
      {keyNumber}
    </button>
  );
}

function Buttons({ onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <Button keyNumber={i} onClick={onClick} />
      ))}
    </p>
  );
}

function Page({ count, onClick }) {
  return (
    <div>
      <p>Counter</p>
      <Counter count={count} onClick={onClick} />
      <Buttons onClick={onClick} />
    </div>
  );
}

function App() {
  const [number, setNumber] = useState({
    count: 0,
  });

  const { count } = number;

  function handleClick(value) {
    if (!value) {
      setNumber({ count: count + 1 });
      return;
    }
    setNumber({ count: count + value });
  }

  return (
    <Page
      count={count}
      onClick={handleClick}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
