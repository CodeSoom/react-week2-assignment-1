import React from 'react';

function Button({ number, children, onClick }) {
  return (
    <button type="button" onClick={() => onClick(number)}>
      { children }
    </button>
  );
}

export default Button;
