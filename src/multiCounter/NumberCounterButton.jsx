import React from 'react';

export default function NumberCounterButton({ number, onClick }) {
  return (
    <button type="button" onClick={() => onClick(number)}>
      {number}
    </button>
  );
}
