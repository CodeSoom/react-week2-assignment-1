import React from 'react';

const Button = ({ handleClick, children }) => (
  <button type="button" onClick={handleClick}>{children}</button>
);

export default Button;
