import React, { useState } from 'react';

import Buttons from './Buttons';
import Counter from './Counter';

function App() {
  const [count, setCount] = useState(0);

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
