import React from 'react';
import Number from './Number';

function AddOneButton({ handleAddOne, numberToShow }) {
  return (
    <div className="count-up-button-container">
      <button type="button" onClick={handleAddOne}>
        Click me! (
        <Number numberToShow={numberToShow} />
        )
      </button>
    </div>
  );
}

export default AddOneButton;
