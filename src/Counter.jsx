import React, { useState } from 'react';

export default function Counter() {
  const initialState = { count: 0 };
  const [state, setState] = useState(initialState);

  function increaseCount(step) {
    setState(({ count }) => ({
      count: count + step,
    }));
  }
  return (
    <p>
      <h1>Counter</h1>

      <p>
        <button type="button" onClick={() => increaseCount(1)}>
          Click me!(
          {state.count}
          )
        </button>
      </p>

      {[1, 2, 3, 4, 5].map((value) => (
        <button type="button" key={value} onClick={() => increaseCount(value)}>
          {value}
        </button>
      ))}
    </p>
  );
}
