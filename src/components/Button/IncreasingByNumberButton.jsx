import React from 'react';

function IncreasingByNumberButton({ number, handleClick }) {
  return (
    <button type="button" onClick={() => handleClick(number)}>{number}</button>
  );
}

export default IncreasingByNumberButton;
