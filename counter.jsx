import React from 'react';

function Counter({ count, handleClick }) {
  return (
    <p>
      <button type="button" onClick={() => handleClick()}>
        Click me!
        (
        {count}
        )
      </button>
    </p>
  );
}

export default Counter;
