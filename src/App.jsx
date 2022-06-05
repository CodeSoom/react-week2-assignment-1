import React, { useState } from 'react';

import CountButton from './component/CountButton';
import Numbers from './component/Numbers';

function App() {
  const [count, setCount] = useState(0);
  const numbers = [1, 2, 3, 4, 5];

  function handleClick() {
    setCount(count + 1);
  }

  function handleNumbersClick(number) {
    setCount(count + number);
  }

  return (
    <div>
      <p>Counter</p>
      <CountButton
        count={count}
        onClick={handleClick}
      />
      <Numbers
        numbers={numbers}
        onClick={handleNumbersClick}
      />
    </div>
  );
}

export default App;
