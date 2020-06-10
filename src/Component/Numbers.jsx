import React from 'react';

function Number({ number, handleClick }) {
  const array = [...Array(number)].map((_, i) => i + 1);
  return (
    array.map((i) => (
      <button type="button" onClick={() => handleClick(i)} key={i}>
        {i}
      </button>
    ))
  );
}

function Numbers({ number, handleClick }) {
  return (
    <Number number={number} handleClick={handleClick} />
  );
}

export default Numbers;
