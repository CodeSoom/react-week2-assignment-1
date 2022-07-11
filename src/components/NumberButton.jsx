import React from 'react';

function NumberButton({ key, number, onClick }) {
  return (
    <button type="button" key={key} onClick={() => onClick(number)}>{number}</button>
  );
}

export default NumberButton;
