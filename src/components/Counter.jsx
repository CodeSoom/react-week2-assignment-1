import React from 'react';

export default function Counter({ count, onClick }) {
  return (
    <div>
      <button type="button" onClick={() => onClick(1)}>
        Click me!
        (
        {count}
        )
      </button>
    </div>
  );
}
