import React from 'react';

function Button({ children, onClick, num }) {
  return (
    <button type="button" onClick={() => onClick(num)}>
      {children}
    </button>
  );
}

export default Button;
