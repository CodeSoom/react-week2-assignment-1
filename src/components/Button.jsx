import React from 'react';

export default function Button({ children, count, onClick }) {
  return (
   <div>
      <button type="button" onClick={() => onClick(1)}>
        Click me!
        (
        {count}
        )
        {children}
      </button>
    </div>
  );
}
