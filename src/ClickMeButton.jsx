import React from 'react';

export default function ClickMeButton({ number, handleClickMe }) {
  return (
    <div>
      <button
        type="button"
        onClick={() => handleClickMe(1)}
      >
        Click me! (
        {number}
        )
      </button>
    </div>
  );
}
