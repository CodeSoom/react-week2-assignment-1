import React, { useState } from 'react';
import Counter from './Counter';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  const handleClick = (number) => {
    setState({ count: count + number });
  };

  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        onClick={() => handleClick(1)}
      />
      <p>
        {[1, 2, 3, 4, 5].map((i) => (
          <button
            type="button"
            onClick={() => handleClick(i)}
          >
            {i}
          </button>
        ))}
      </p>
    </div>
  );
}
