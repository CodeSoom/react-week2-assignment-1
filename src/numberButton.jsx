import React from 'react';

export default function NumberButton({ value, onClick }) {
  return (
    <button
      type="button"
      key={value}
      onClick={() => onClick(value)}
    >
      {
        value
      }
    </button>
  );
}
