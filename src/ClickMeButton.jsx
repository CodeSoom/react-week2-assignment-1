import React from 'react';

export default function ClickMeButton({ number, onClick }) {
  return (
    <div>
      <button type="button" onClick={() => onClick()}>
        Click me! (
        {number}
        )
      </button>
    </div>
  );
}
