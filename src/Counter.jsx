import React, { useState } from 'react';

export default function Counter() {
  const initialState = { count: 0 };
  const [state, setState] = useState(initialState);

  return (
    <p>
      <h1>Counter</h1>

      <p>
        <button type="button">
          Click me!(
          {state.count}
          )
        </button>
      </p>

      {[1, 2, 3, 4, 5].map((value) => (
        <button type="button">
          {value}
        </button>
      ))}
    </p>
  );
}
