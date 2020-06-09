import React from 'react';

function Button({ children, onClick }) {
  if (typeof children === 'number') {
    return (
      <button type="button" onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <button type="button">
      {children}
    </button>
  );
}

export default Button;
