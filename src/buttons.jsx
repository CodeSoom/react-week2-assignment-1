import React from 'react';

import Button from './button';

const array = [1, 2, 3, 4, 5];

export default function Buttons({ onClickButton }) {
  return (
    <div>
      {array.map((i) => (
        <Button
          key={i}
          onClick={() => { onClickButton(i); }}
        >
          {i}
        </Button>
      ))}
    </div>
  );
}
