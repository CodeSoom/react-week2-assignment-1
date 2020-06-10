import React, { useState } from 'react';

import Counter from './Counter';

export default function App() {
  const [count, setCount] = useState(0);

  function handleClickMe() {
    setCount(count + 1);
  }

  function handleClickNumber(value) {
    setCount(count + value);
  }

  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        onClickMe={handleClickMe}
        onClickNumber={handleClickNumber}
      />
    </div>
  );
}
