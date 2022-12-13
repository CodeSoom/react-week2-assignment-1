import React from 'react';
import Button from './Button';

export default function Buttons() {
  return (
    <p>
      {[1, 2, 3].map((number) => (
        <Button key={number}>
          {number}
        </Button>
      ))}
    </p>
  );
}
