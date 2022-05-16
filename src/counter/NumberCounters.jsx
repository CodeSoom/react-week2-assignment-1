import React from 'react';

import Counter from './Counter';

export default function NumberCounters({ onCounter }) {
  return (
    <div>
      { [1, 2, 3, 4, 5].map((i) => (
        <Counter onCounter={onCounter} value={i}>
          { i }
        </Counter>
      )) }
    </div>
  );
}
