import React from 'react';

function CounterButton({
  count,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
    >
      Click me!
      (
      {count}
      )
    </button>
  );
}

export default CounterButton;
