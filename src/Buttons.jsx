import React from 'react';

export default function Buttons({ numbers, onClick }) {
  return (
    <p>
      {numbers.map((i) => (
        <button type="button" key={i} onClick={() => onClick(i)}>
          {i}
        </button>
      ))}
    </p>
  );
}
