import React from 'react';

function Button({ children, ButtonClick }) {
  return (
    <button
      type="button"
      onClick={ButtonClick}
    >
      {children}
    </button>
  );
}

export default Button;
