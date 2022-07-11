import React from 'react';

export default function NumberButton({ handleClick }) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((i) => (
        <button type="button" key={`number-${i}`} value={i} onClick={(e) => handleClick(e)}>
          {i}
        </button>
      ))}
    </div>
  );
}
