import React from 'react';

import Counter from './Counter';

const NumberCounters = ({ setCount }) => (
  <div>
    {[1, 2, 3, 4, 5].map((i) => (
      <Counter onCounter={() => setCount(i)}>
        {i}
      </Counter>
    ))}
  </div>
);

export default NumberCounters;
