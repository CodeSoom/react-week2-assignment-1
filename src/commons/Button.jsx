import React from 'react';

function Button({ count, onClick, children }) {
  return (
    <button
      type="button"
      onClick={() => onClick(count)}
    >
      {children}
    </button>
  );
}

export default Button;
