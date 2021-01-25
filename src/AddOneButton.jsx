import React from 'react';
import Number from './Number';

function AddOneButton({ onClick, numberToShow }) {
  return (
    <div className="count-up-button-container">
      <button type="button" onClick={onClick}>
        Click me! (
        <Number numberToShow={numberToShow} />
        )
      </button>
    </div>
  );
}

export default AddOneButton;
