import React from 'react';

import Counter from './Counter';

const NumberCounters = ({ onCounter }) => (
  <div>
    {[1, 2, 3, 4, 5].map((i) => (
      <Counter onCounter={onCounter} value={i}>
        {i}
      </Counter>
    ))}
  </div>
);

export default NumberCounters;
