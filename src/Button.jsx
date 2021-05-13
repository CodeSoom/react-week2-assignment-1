import { func, number } from 'prop-types';
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

Button.propTypes = {
  count: number.isRequired,
  onClick: func.isRequired,
};

export default Button;
