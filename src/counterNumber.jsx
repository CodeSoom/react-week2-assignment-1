import React from 'react';

function CounterNumber({ value, onClick }) {
  return (
    <button type="button" onClick={onClick}>{value}</button>
  );
}

export default CounterNumber;
