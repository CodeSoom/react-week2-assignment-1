import React from 'react';

function ClickMeButton({ number, onClick }) {
  return (
    <button type="button" onClick={() => onClick(1)}>
      Click me!
      (
      {number}
      )
    </button>
  );
}

export default ClickMeButton;
