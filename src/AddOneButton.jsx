import React from 'react';

function AddOneButton({ onClick, number }) {
  return (
    <div className="count-up-button-container">
      <button
        type="button"
        onClick={() => {
          onClick(1);
        }}
      >
        Click me! (
        {number}
        )
      </button>
    </div>
  );
}

export default AddOneButton;
