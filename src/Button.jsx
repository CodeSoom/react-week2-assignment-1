import React from 'react';

const Button = ({ count, onClick }) => (
  <button
    type="button"
    onClick={onClick}
  >
    Click me! (
    {count}
    )
  </button>
);

export default Button;
