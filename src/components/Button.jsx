import React from 'react';

function Button({ children, onClick }) {
  return (
    <button type="button" onClick={() => onClick({ number: children })}>
      {children}
    </button>
  );
}

export default Button;
