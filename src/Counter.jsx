import React from 'react';

function Counter({ count, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      click me!
      (
      {count}
      )
    </button>
  );
}

export default Counter;
