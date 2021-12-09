import React from 'react'

import NumberButton from './NumberButton';

function Buttons({ onClick }) {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div>
      {numbers.map((i) => (
        <NumberButton key={i} number={i} onClick={onClick}>{i}</NumberButton>
      ))}
    </div>

  )
}

export default Buttons;
