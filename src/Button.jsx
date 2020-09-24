import React from 'react';

function Button({ children, onButtonClick }) {
  return (
    <button
      type="button"
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
}

export default Button;
