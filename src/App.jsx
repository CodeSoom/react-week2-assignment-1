import React, { useState } from 'react';

import Buttons from './Buttons';
import Counter from './Counter';

const DEFAULT_COUNT = 0;

function App() {
  const [count, setCount] = useState(DEFAULT_COUNT);

  function handleClick() {
    setCount(count + 1);
  }

  function handleNumberClick(value) {
    setCount(count + value);
  }

  return (
    <div>
      <div>
        <Counter count={count} onClick={handleClick} />
      </div>
      <div>
        <Buttons onClick={handleNumberClick} />
      </div>
    </div>
  );
}

export default App;
