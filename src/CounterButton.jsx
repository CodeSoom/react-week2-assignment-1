import React from 'react';

export default function CounterButton({ count, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Click me!
      (
      {count}
      )
    </button>
  );
}
