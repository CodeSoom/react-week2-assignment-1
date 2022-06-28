import React, { useState } from 'react';

import Buttons from './Buttons';
import Counter from './Counter';

export default function App() {
  const [count, setCount] = useState(0);
  const numberButtonList = [1, 2, 3, 4, 5];

  function handleAddCount(number) {
    setCount(count + number);
  }

  return (
    <div>
      <h1>Counter</h1>
      <Counter
        count={count}
        onClick={() => handleAddCount(1)}
      />
      <Buttons buttonList={numberButtonList} onClick={handleAddCount} />
    </div>
  );
}
