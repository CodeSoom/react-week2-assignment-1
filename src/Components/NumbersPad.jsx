import React from 'react';

import Button from './Button';

export default function NumbersPad({ numbers, onClick }) {
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
