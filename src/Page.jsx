import React from 'react';

import Counter from './Counter';
import Button from './Button';

export default function Page({ count, onClick }) {
  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        onClick={() => onClick(1)}
      />
      <p>
        {[1, 2, 3, 4, 5].map((i) => (
          <Button key={i} onClick={() => onClick(i)}>
            {i}
          </Button>
        ))}
      </p>
    </div>
  );
}
