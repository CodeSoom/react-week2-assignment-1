import React, { useState } from 'react';

import Counter from './Counter';
import Numbers from './Numbers';

export default function App() {
  const [count, setCount] = useState(0);

  const handleClickPlusNumber = () => {
    setCount(count + 1);
  };

  const handleClickNumber = (value) => {
    setCount(count + value);
  };

  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        onClick={handleClickPlusNumber}
      />
      <Numbers
        onClick={handleClickNumber}
      />
    </div>
  );
}
