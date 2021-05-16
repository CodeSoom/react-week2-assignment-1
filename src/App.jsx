import React, { useState } from 'react';

import Counter from './Counter';
import NumberButtons from './NumberButtons';

export default function App() {
  const [count, setCount] = useState(0);

  function handleClickPlusNumber(value) {
    setCount(count + value);
  }

  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        onClickPlusOne={() => handleClickPlusNumber(1)}
      />
      <NumberButtons
        onClickPlusNumber={handleClickPlusNumber}
      />
    </div>
  );
}
