import React from 'react';

export default function NumberButton({ value, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
    >
      {value}
    </button>
  );
}
