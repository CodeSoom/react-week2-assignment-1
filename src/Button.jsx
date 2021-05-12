import { func, number } from 'prop-types';
import React from 'react';

const Button = ({ count, handleClick }) => (
  <button type="button" onClick={handleClick}>
    Click me! (
    {count}
    )
  </button>
);

Button.propTypes = {
  count: number.isRequired,
  handleClick: func.isRequired,
};

export default Button;
