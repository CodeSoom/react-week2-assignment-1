import React from 'react';

export default function CounterButton({ number, onClick }) {
  return (
    <button type="button" onClick={() => onClick(number)}>
      {number}
    </button>
  );
}
