import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const countStep = [1, 2, 3, 4, 5];

  function handleClickCount(step) {
    setCount(count + step);
  }

  return (
    <div>
      Counter
      <div>
        <button
          type="button"
          onClick={() => handleClickCount(1)}
        >
          Click me!
          (
          {count}
          )
        </button>
      </div>
      <div>
        {countStep.map((it) => (
          <button
            type="button"
            onClick={() => handleClickCount(it)}
            value={it}
            key={it}
          >
            {it}
          </button>
        ))}
      </div>
    </div>
  );
}
