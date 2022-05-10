import React from 'react';

function Counter({ count = 0, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Click me! (
      {count}
      )
    </button>
  );
}

export default Counter;
