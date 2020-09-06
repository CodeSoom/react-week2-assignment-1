import React from 'react';

function Counter({ count, handleClick }) {
  return (
    <button type="button" onClick={() => handleClick(1)}>
      Click me(
      {count}
      )
    </button>
  );
}

export default Counter;
