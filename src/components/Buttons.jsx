import React from 'react';
import Button from './Button';
import getDisplayNumbers from '../utils/getDisplayNumbers';

const COUNT_BUTTONS = getDisplayNumbers(5);

export default function Buttons({ onClick }) {
  return (
    <div>
      {COUNT_BUTTONS.map((i) => (
        <Button key={i} onClick={() => onClick(i)}>
          {i}
        </Button>
      ))}
    </div>
  );
}
