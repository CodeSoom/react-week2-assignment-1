import React from 'react';

function Button({ onClick, children }) {
  return (
    <button onClick={() => onClick(children)} type="button">
      {children}
    </button>
  );
}

export default Button;
