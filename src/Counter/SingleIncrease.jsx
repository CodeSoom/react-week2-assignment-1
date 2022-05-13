import React from 'react';

export default function SingleIncrease({ count, onClick }) {
  return (
    <button type="button" onClick={() => onClick(1)}>
      Click me! (
      {count}
      )
    </button>
  );
}
