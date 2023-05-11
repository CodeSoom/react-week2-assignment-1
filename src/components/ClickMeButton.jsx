import React from 'react';

export default function ClickMeButton({ counterNumber, handlerClickButton }) {
  return (
    <button type="button" onClick={() => handlerClickButton({ number: 1 })}>
      Click me ({counterNumber})
    </button>
  );
}
