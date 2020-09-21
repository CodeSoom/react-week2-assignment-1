import React from 'react';

function ClickMeButton({ value }) {
  return (
    <button type="button">
      Click me! (
      {value}
      )
    </button>
  );
}

export default ClickMeButton;
