import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const numbers = [1, 2, 3, 4, 5];
const DEFAULT_INCREASED = 1;

function Counter({ count, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick({ increased: DEFAULT_INCREASED })}
    >
      Click me!
      (
      {count}
      )
    </button>
  );
}

function Button({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick({ increased: children })}
    >
      {children}
    </button>
  );
}

function Buttons({ onClick }) {
  return (
    <p>
      {numbers.map((number) => (
        <Button
          key={number}
          onClick={onClick}
        >
          {number}
        </Button>
      ))}
    </p>
  );
}
function Page({ count, onClick }) {
  return (
    <div>
      <p>Counter</p>
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
  });

  const { count } = state;

  function handleClick({ increased }) {
    setState({
      count: count + increased,
    });
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
