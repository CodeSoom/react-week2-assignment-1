import React from 'react';

const DEFAULT_INCREASED = 1;

function Counter({ count, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick({ increased: DEFAULT_INCREASED })}
    >
      Click me!
      (
      {count}
      )
    </button>
  );
}

export default Counter;
