import React from 'react';
import NumberButton from './NumberButton';

const NumberButtons = ({ onClick }) => (
  <>
    {
      [1, 2, 3, 4, 5].map((i) => (
        <NumberButton
          key={i}
          number={i}
          onClick={() => onClick(i)}
        />
      ))
    }
  </>
);


export default NumberButtons;
