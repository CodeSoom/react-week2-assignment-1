import React from 'react';

import Button from './Button';

export default function Buttons({ onClick }) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((number) => (
        <Button onClick={onClick} number={number} key={number}>
          {number}
        </Button>
      ))}
    </div>
  );
}
