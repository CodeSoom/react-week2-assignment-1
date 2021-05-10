import React from 'react';

export default function App() {
  return (
    <p>
      <h1>Counter</h1>

      <p>
        <button type="button">
          Click me!
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
