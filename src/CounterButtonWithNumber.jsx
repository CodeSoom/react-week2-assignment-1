import React from 'react';

function CounterButtonWithNumber({
  number,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
    >
      {number}
    </button>
  );
}

export default CounterButtonWithNumber;
