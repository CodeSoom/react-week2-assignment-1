import React from 'react';

import Counter from './Counter';
import NumberButtons from './NumberButtons';

export default function CounterPage({ count, onClick }) {
  return (
    <div>
      <p>Count</p>
      <Counter
        count={count}
        onClick={() => onClick.counter(1)}
      />
      <NumberButtons
        onClick={onClick.counter}
      />
    </div>
  );
}
