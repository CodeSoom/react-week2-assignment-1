import React from 'react';

import Button from './Button';

export default function Buttons({ onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((it) => (
        <Button key={it} onClick={() => onClick(it)}>
          {it}
        </Button>
      ))}
    </p>
  );
}
