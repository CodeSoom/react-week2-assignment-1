import React, { useState } from 'react';
import Counter from './Counter';
import NumberButtonList from './NumberButtonList';

function App() {
  const [count, setCount] = useState(0);

  const handleClickCounter = () => {
    setCount(count + 1);
  };

  const handleClickNumber = (value) => {
    setCount(count + value);
  };

  return (
    <div>
      <h1>Counter</h1>
      <Counter
        count={count}
        onClick={handleClickCounter}
      />
      <NumberButtonList
        onClick={handleClickNumber}
      />
    </div>
  );
}

export default App;
