import React from 'react';

function numberButton({ number, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {number}
    </button>
  );
}
export default numberButton;
