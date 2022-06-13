/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter({ count, onClick }) {
  return (
    <button type="button" onClick={onClick} className="counter">
      Click me!
      (
      { count }
      )
    </button>
  );
}

function NumberButton({ onClick, children }) {
  return (
    <button type="button" className="number-button" onClick={onClick}>
      { children }
    </button>
  );
}

const numbers = [1, 2, 3, 4, 5];

function NumberButtons({ onClick }) {
  return (
    <div className="number-buttons">
      (
      {
        numbers.map((i) => (
          <NumberButton key={i} onClick={() => onClick(i)}>
            { i }
          </NumberButton>
        ))
      }
      )
    </div>
  );
}

function ResetButton({ onClick }) {
  return (
    <button type="button" className="reset-button" onClick={onClick}>
      reset
    </button>
  );
}

function App() {
  const [count, setCount] = useState(0);

  function handleClickCounter() {
    setCount(count + 1);
  }

  function handleClickNumberButton(number = 0) {
    setCount(count + number);
  }

  function handleClickResetButton() {
    setCount(0);
  }

  return (
    <div className="container">
      <h1>Counter</h1>

      <Counter count={count} onClick={handleClickCounter} />

      <NumberButtons onClick={handleClickNumberButton} />

      <ResetButton onClick={handleClickResetButton} />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
