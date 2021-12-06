import React from 'react';

function Button({ number, onIncreaseByNumber }) {
  return (
    <button type="button" onClick={() => onIncreaseByNumber(number)}>
      {number}
    </button>
  );
}

export default Button;
