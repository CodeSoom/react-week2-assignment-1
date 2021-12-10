import React from 'react';

export default function NumberButton({ onClick, number, children }) {
  return (
    <button
      onClick={() => onClick(number)}
      type="button">
      {children}
    </button>
  );
}
