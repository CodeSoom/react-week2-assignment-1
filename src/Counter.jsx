import React from 'react';

const Counter = ({ children, onClick }) => (
  <button type="button" onClick={onClick}>
    {children}
  </button>
);

export default Counter;
