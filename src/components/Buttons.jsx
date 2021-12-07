import React from 'react';
import Button from './Button';

const NUMBERS = [1, 2, 3, 4, 5];

function Buttons({ onClickNumber }) {
  function renderNumbers(number) {
    return (
      <Button key={number} onClick={() => onClickNumber(number)}>
        {number}
      </Button>
    );
  }

  return (
    <p>
      {NUMBERS.map(renderNumbers)}
    </p>
  );
}

export default Buttons;
