import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function ClickMeButton({ number, onClick }) {
  return (
    <button type="button" onClick={() => onClick(1)}>
      Click me!
      (
      {number}
      )
    </button>
  );
}

function NumberButton({ number, onClick }) {
  return (
    <button type="button" onClick={() => onClick(number)}>
      {number}
    </button>
  );
}

function NumberButtons({ onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <NumberButton key={i} number={i} onClick={onClick}>
          {i}
        </NumberButton>
      ))}
    </p>
  );
}

function MainPage({ number, onClick }) {
  return (
    <div>
      <p>Counter</p>
      <ClickMeButton
        number={number}
        onClick={onClick}
      />
      <NumberButtons
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

  function handleClickNumber(numeral) {
    setState({
      number: number + numeral,
    });
  }

  return (
    <MainPage
      number={number}
      onClick={handleClickNumber}
    />
  );
}

ReactDOM.render(
  <App />, document.getElementById('app'),
);
