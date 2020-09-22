import React from 'react';

export default function Button({ onClick, children }) {
  return (
    <button
      type="button"
      key={children}
      onClick={() => onClick(children)}
    >
      {children}
    </button>
  );
}
