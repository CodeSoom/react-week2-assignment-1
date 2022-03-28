import React from 'react';

function ClickMeButton({ count, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Click me! (
      {count}
      )
    </button>
  );
}

export default ClickMeButton;
