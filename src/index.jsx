/* @jsx React.createElement */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter({ count, onClick }) {
  return (
    <button type="button" onClick={onClick}>
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

function Page({ count, onClick }) {
  return (
    <div>
      <p>hello,world!</p>
      <Counter count={count} onClick={onClick} />
      <p>
        <Buttons />
      </p>
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

  return <Page count={count} onClick={handleClick} />;
}

ReactDOM.render(<App />, document.getElementById('app'));
