import React from 'react';

function Button({ children, onClick }) {
  return (
    <button onClick={() => onClick(children)} type="button">{children}</button>
  );
}

export default Button;
