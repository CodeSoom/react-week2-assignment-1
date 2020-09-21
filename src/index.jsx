import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter({ number, onClick }) {
  return (
    <button type="button" onClick={() => onClick(1)}>
      Click me!
      (
      {number}
      )
    </button>
  );
}

function Button({ number, onClick }) {
  return (
    <button type="button" onClick={() => onClick(number)}>
      {number}
    </button>
  );
}

function Buttons({ onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <Button key={i} onClick={onClick}>
          {i}
        </Button>
      ))}
    </p>
  );
}

function Page({ number, onClick }) {
  return (
    <div>
      <p>Counter</p>
      <Counter
        number={number}
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
    number: 0,
  });

  const { number } = state;

  function handleClick(numeral) {
    setState({
      number: number + numeral,
    });
  }

  return (
    <Page
      number={number}
      onClick={handleClick}
    />
  );
}

ReactDOM.render(
  <App />, document.getElementById('app'),
);
