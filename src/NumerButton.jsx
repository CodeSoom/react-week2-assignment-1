import React from 'react';

export default function NumberButton({ onClick }) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((number) => (
        <button type="button" key={number} onClick={() => onClick(number)}>{number}</button>
      ))}
    </div>
  );
}
