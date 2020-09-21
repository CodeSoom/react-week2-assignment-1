import React, { useState } from 'react';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  const handleClick = () => {
    setState({ count: count + 1 });
  };

  return (
    <div>
      <p>Counter</p>
      <button
        type="button"
        onClick={handleClick}
      >
        Click me! (
        {count}
        )
      </button>
    </div>
  );
}
