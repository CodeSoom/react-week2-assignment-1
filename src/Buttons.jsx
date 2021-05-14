import React from 'react';

import Button from './Button';

export default function Buttons({ onClickPlusNumber }) {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <p>
      {numbers.map((number) => (
        <Button value={number} onClickPlusNumber={onClickPlusNumber} />
      ))}
    </p>
  );
}
