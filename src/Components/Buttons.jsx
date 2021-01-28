import React from 'react';
import NumberButton from './NumberButton';

function Buttons({ onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((number) => (
        <NumberButton key={number} number={number} onClick={onClick} />
      ))}
    </p>
  );
}

export default Buttons;
