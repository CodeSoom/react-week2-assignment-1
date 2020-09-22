import React from 'react';

function Button({ number, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {number}
    </button>
  );
}

export default Button;
