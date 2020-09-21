/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';

function ClickMeButton({ value, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
    >
      Click me! ({value})
    </button>
  );
}

export default ClickMeButton;
