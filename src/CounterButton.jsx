import React from 'react';

function CounterButton({ count }) {
  return (
    <button type="button">
      Click me!
      (
      {count}
      )
    </button>
  );
}

export default CounterButton;
