import React from 'react';

export default function NumberButton({ value, onClick }) {
  return (
    <div>
      <button
        type="button"
        onClick={() => onClick(value)}
      >
        {value}
      </button>
    </div>
  );
}
