import React from 'react';

function Counter({ count, onClick }) {
  return (
    <div>
      <button type="button" onClick={onClick}>
        Click me!
        (
        {count}
        )
      </button>
    </div>
  );
}

export default Counter;
