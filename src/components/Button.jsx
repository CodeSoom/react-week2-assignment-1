import React from 'react';

function Button({ buttonValue, onClick }) {
  return (
    <button type="button" onClick={() => onClick(buttonValue)}>{buttonValue}</button>
  );
}

export default Button;
