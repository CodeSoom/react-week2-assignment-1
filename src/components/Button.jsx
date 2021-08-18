import React from 'react';

function Button({ children, handleClick }) {
  return (
    <button type="button" onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
