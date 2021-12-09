import React from 'react';

const Button = ({ children, onClick, key }) => (
  <button type="button" key={key} onClick={onClick}>
    {children}
  </button>
);

export default Button;
