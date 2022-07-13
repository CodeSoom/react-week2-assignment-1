import React from 'react';
import uuid from 'react-uuid';

export default function Button({ onClick }) {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <p>
      {numbers.map((number) => (
        <button type="button" key={uuid()} onClick={() => onClick(number)}>
          {number}
        </button>
      ))}
    </p>
  );
}
