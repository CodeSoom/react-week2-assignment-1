import React from 'react';

function Button({ children, handleNumbersClick }) {
  return (
    <button type="button" onClick={() => handleNumbersClick(children)}>
      {children}
    </button>
  );
}
export default Button;
