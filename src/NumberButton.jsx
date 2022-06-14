import React from 'react';

export default function NumberButton({ onClick, number }) {
  return (
    <button type="button" className="number-button" onClick={onClick}>
      { number }
    </button>
  );
}
