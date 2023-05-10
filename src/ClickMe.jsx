import React from 'react';
import ReactDOM from 'react-dom';

export default function ClickMe({ counterNumber, handlerClickButton }) {
  return (
    <button onClick={() => handlerClickButton({ number: 1 })}>
      Click me ({counterNumber})
    </button>
  );
}
