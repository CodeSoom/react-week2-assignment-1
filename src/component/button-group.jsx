import React from 'react';
import NumberButton from './number-button';

function ButtonGroup({ count, onClick }) {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <p>
      {numbers.map((number) => (
        <NumberButton
          count={count}
          number={number}
          onClick={onClick}
        />
      ))}
    </p>
  );
}

export default ButtonGroup;
