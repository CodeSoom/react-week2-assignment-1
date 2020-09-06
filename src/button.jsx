import React from 'react';

function Button({ children, handleClick }) {
  return (
    <button type="button" onClick={() => handleClick(children)}>
      {children}
    </button>
  );
}

export default Button;
