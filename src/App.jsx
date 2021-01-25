import React, { useState } from 'react';
import Counter from './Counter';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <Counter
        count={count}
        onClick={handleClick}
      />
    </div>
  );
}

export default App;
