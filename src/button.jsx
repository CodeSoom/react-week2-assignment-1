import React from 'react';

function Button({ number, handleNumbersClick }) {
  return (
    <button type="button" onClick={() => handleNumbersClick(number)}>
      {number}
    </button>
  );
}
export default Button;
