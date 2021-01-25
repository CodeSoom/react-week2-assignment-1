import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const numbers = [1,2,3,4,5];
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
function Button({ children }) {
  return (
    <button type="button">
      {children}
    </button>
  );
}
function Buttons() {
  return (
    <p>
      {numbers.map((i) => (
        <Button key={i}>
          {i}
        </Button>
      ))}
    </p>
  );
}
function Page({ count, onClick }) {
  return (
    <div>
      <p>Hello, world!</p>
      <p>Hi</p>
      <Counter
        count={count}
        onClick={onClick}
      />
      <Buttons />
    </div>
  );
}
function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick() {
    setState(
      { count: count + 1 },
    );
  }
  return (
    <Page
      count={count}
      onClick={handleClick}
    />
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
