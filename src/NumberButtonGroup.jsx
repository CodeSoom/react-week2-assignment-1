import React from 'react';

export default function NumberButton({ incrementCount }) {
  return (
    [1, 2, 3, 4, 5].map((number) => (
      <button
        type="button"
        key={number}
        onClick={() => incrementCount(number)}
      >
        {number}
      </button>
    ))
  );
}
