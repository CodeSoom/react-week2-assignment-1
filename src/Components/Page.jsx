import React, { useState } from 'react';
import Counter from './Counter';

const STEPS = [1, 2, 3, 4, 5];

function Page() {
  const [count, setCount] = useState(0);

  function handleClickIncreasedNumber(step) {
    setCount(count + step);
  }

  return (
    <div>
      <h1>Counter</h1>
      <p>
        <Counter onClick={() => handleClickIncreasedNumber(1)}>
          Click me (
          {count}
          )
        </Counter>
      </p>
      <p>
        {STEPS.map((i) => (
          <Counter key={i} onClick={() => handleClickIncreasedNumber(i)}>
            {i}
          </Counter>
        ))}
      </p>
    </div>
  );
}

export default Page;
