import React from 'react';

function NumberButton({ onClick }) {
  return (
    <>
      {[1, 2, 3, 4, 5].map((i) => (
        <button type="button" onClick={() => onClick(i)} key={i}>{i}</button>
      ))}
    </>
  );
}

export default NumberButton;
