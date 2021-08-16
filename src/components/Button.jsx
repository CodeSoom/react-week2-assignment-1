import React from 'react';

export default function Button({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick({ number: children })}
    >
      {children}
    </button>
  );
}
