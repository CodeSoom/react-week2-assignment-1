import React from 'react';

export default function NumberButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}
