import React, { useState } from 'react';

import Counter from './Counter';
import Numbers from './Numbers';

export default function App() {
  const [count, setCount] = useState(0);

  const handleClickNumber = (value) => {
    setCount(count + value);
  };

  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        onClick={() => handleClickNumber(1)}
      />
      <Numbers
        onClick={handleClickNumber}
      />
    </div>
  );
}
