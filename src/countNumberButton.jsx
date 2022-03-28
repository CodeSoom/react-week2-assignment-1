import React from 'react';

function CountNumberButton({ value, onClick }) {
  return (
    <button type="button" onClick={onClick}>{value}</button>
  );
}

export default CountNumberButton;
