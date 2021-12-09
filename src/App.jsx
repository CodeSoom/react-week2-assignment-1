import React from 'react';

export default function App() {
  const count = [1, 2, 3, 4, 5];

  return (
    <div>
      Counter
      <div>
        <button type="button">
          click!
        </button>
      </div>
      <div>
        {count.map((it) => (
          <button
            type="button"
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
