import React, { useState } from 'react';

import Button from './Button';

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
        <Button
          value={`Click me! (${count})`}
          onClick={() => handleClickCount(1)}
        />
      </div>
      <div>
        {countStep.map((it) => (
          <Button
            value={it}
            key={it}
            onClick={() => handleClickCount(it)}
          />
        ))}
      </div>
    </div>
  );
}
