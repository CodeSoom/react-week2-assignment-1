import React from 'react';

function Button({ keyNumber, onClick }) {
  return (
    <button key={keyNumber.toString()} type="button" onClick={() => onClick(keyNumber)}>
      {keyNumber}
    </button>
  );
}

export default Button;
