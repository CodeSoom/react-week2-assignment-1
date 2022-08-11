import React from 'react';

function Button({ keyNumber, onClick }) {
  return (
    <button type="button" onClick={() => onClick(keyNumber)}>
      {keyNumber}
    </button>
  );
}

export default Button;
