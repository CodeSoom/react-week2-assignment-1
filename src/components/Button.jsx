import React from 'react';

function Button({ onClick, number }) {
  return (
    <button type="button" onClick={() => onClick(number)}>
      {number}
    </button>
  );
}

export default Button;
