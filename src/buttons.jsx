import React from 'react';

import Button from './button';

export default function Buttons() {
  return (
    <div>
      {[1, 2, 3].map((i) => (
        <Button key={i}>{i}</Button>
      ))}
    </div>
  );
}
