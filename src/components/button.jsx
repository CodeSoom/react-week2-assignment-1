import React from 'react';

export default function Button({ number, onIncreaseByNumber }) {
  return (
    <button type="button" onClick={() => onIncreaseByNumber(number)}>
      {number}
    </button>
  );
}
