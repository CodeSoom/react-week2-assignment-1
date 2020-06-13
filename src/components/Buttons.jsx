import React from 'react';

function Buttons({ buttonValue, onClick }) {
  return (
    <button type="button" onClick={() => onClick(buttonValue)}>{buttonValue}</button>
  );
}

export default Buttons;
