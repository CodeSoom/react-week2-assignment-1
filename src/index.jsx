/* @jsx React.createElement */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick() {
    setState({
      count: count + 1,
    });
  }

  return (
    <button type="button" onClick={handleClick}>
      click me!
      (
      {count}
      )
    </button>
  );
}

function Button({ children }) {
  return (
    <>
      <button type="button">{children}</button>
    </>
  );
}

function Buttons() {
  return (
    <>
      {[1, 2, 3].map((i) => (
        <Button key={i}>{i}</Button>
      ))}
    </>
  );
}

function App() {
  return (
    <div>
      <p>hello,world!</p>
      <Counter />
      <p>
        <Buttons />
      </p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
