import React from 'react';

export default function Counter({ count, handleClickNumber }) {
  return (
    <button type="button" onClick={() => handleClickNumber()}>
      Click me!
      (
      {count}
      )
    </button>
  );
}
