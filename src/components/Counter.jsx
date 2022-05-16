import React from 'react';

export default function Counter({ count = 0, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Click me! (
      {count}
      )
    </button>
  );
}
