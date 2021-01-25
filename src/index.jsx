import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter({ count, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Click Me!
      {count}
    </button>
  );
}

function Button({ children }) {
  return <button type="button">{children}</button>;
}

function Buttons() {
  return (
    <p>
      {[1, 2, 3].map((i) => <Button key={i}>{i}</Button>)}
    </p>
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

  return (
    <div>
      <p>Hello, World!</p>
      <p>Hi!</p>
      <Counter count={count} onClick={handleClick} />
      <Buttons />
    </div>
  );
}

ReactDOM.render(App(), document.getElementById('app'));
