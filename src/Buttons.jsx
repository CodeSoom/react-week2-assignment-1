import React from 'react';

export default function Buttons({ onClick }) {
  const numberButton = [1, 2, 3, 4, 5];

  return (
    <p>
      {
        numberButton.map((i) => (
          <button type="button" key={i} onClick={() => onClick(i)}>{i}</button>
        ))
      }
    </p>
  );
}
