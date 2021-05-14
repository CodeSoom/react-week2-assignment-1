import React, { useState } from 'react';

import Counter from './Counter';
import NumberButtons from './NumberButtons';

export default function App() {
  const [count, setCount] = useState(0);

  function handleClickPlusOne() {
    setCount(count + 1);
  }

  function handleClickPlusNumber(value) {
    setCount(count + value);
  }

  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        onClickPlusOne={handleClickPlusOne}
      />
      <NumberButtons
        onClickPlusNumber={handleClickPlusNumber}
      />
    </div>
  );
}
