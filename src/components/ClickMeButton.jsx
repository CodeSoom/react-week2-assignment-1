/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';

function ClickMeButton({ value, handleClick }) {
  return (
    <button
      type="button"
      onClick={handleClick}
    >
      Click me! ({value})
    </button>
  );
}

export default ClickMeButton;
