import React from 'react';

function Button({ children, onNumberClick }) {
  return (
    <button
      type="button"
      onClick={onNumberClick}
    >
      {children}
    </button>
  );
}

export default Button;
