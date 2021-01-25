import React from 'react';

function Counter({ count, onClick }) {
  return (
    <button type="button" onClick={() => onClick(count + 1)}>
      Click me!
      (
      {count}
      )
    </button>
  );
}

export default Counter;
