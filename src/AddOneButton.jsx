import React from 'react';

function AddOneButton({ onClick, numberToShow }) {
  return (
    <div className="count-up-button-container">
      <button type="button" onClick={onClick}>
        Click me! ({numberToShow})
      </button>
    </div>
  );
}

export default AddOneButton;
