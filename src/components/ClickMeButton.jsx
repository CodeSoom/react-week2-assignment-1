import React from 'react';

export default function ClickMeButton({ counterNumber, onClick, number }) {
  return (
    <button type="button" onClick={() => onClick({ number })}>
      Click me ({counterNumber})
    </button>
  );
}
