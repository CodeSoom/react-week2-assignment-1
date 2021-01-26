import React from 'react';

export default function NumberButton({ value, onClick }) {
  function handleClickNumber() {
    onClick(value);
  }

  return (
    <button
      type="button"
      key={value}
      onClick={handleClickNumber}
    >
      {
        value
      }
    </button>
  );
}
