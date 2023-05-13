import React from 'react';

export default function ClickMeButton({
  counterNumber,
  onClick,
  whatNumberToAdd,
}) {
  return (
    <button type="button" onClick={() => onClick({ number: whatNumberToAdd })}>
      Click me ({counterNumber})
    </button>
  );
}
