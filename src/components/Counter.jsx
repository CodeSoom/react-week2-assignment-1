import React from 'react';

function Counter({ count, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Click Me!
      {count}
    </button>
  );
}

export default Counter;
