import { func, number } from 'prop-types';
import React from 'react';

const Button = ({ count, handleClickBtn }) => (
  <button type="button" onClick={handleClickBtn}>
    Click! (
    {count}
    )
  </button>
);

Button.propTypes = {
  count: number.isRequired,
  handleClickBtn: func.isRequired,
};

export default Button;
