import React from 'react';

import Button from './Button';

export default function Buttons({ onClick }) {
  function handleClick(value) {
    onClick({ number: value });
  }
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <Button
          key={i}
          onClick={() => handleClick(i)}
        >
          {i}
        </Button>
      ))}
    </p>
  );
}
