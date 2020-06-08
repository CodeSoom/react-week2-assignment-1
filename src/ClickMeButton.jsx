import React from 'react';

export default function ClickMeButton({ showNumber, handleClickMe }) {
  return (
    <div>
      <button
        type="button"
        onClick={() => handleClickMe(1)}
      >
        Click me! (
        {showNumber}
        )
      </button>
    </div>
  );
}
