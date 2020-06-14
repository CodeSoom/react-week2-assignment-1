import React from 'react';

import Button from './Button';

export default function Buttons({ onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((number) => (
        <Button
          key={number}
          count={number}
          onClick={onClick}
        >
          {number}
        </Button>
      ))}
    </p>
  );
}
