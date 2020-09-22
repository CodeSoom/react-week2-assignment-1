import React from 'react';

import Counter from './Counter';
import CounterButtons from './CounterButtons';

export default function CounterPage({ count, onClick }) {
  return (
    <div>
      <p>Count</p>
      <Counter
        count={count}
        onClick={onClick.counter}
      />
      <CounterButtons
        onClick={onClick.number}
      />
    </div>
  );
}
