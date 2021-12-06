import React from 'react';

// eslint-disable-next-line react/prop-types
const Button = ({ onClick, children }) => (
  <button onClick={onClick} type="button">
    {children}
  </button>
);

export default Button;
