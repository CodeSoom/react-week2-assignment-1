/* eslint-disable linebreak-style */
import React from 'react';

import Button from './Button';

export default function Buttons({ onClick }) {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div>
      {numbers.map((i) => (
        <Button key={i} onClick={() => onClick(i)}>
          {i}
        </Button>
      ))}
    </div>
  );
}
