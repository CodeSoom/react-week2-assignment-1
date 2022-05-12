import React from 'react';

function Button({ onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
