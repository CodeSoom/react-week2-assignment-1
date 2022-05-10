import React from 'react';

const Counter = ({ handleCounter, children, value }) => (
  <button type="button" onClick={handleCounter} value={value}>{children}</button>
);

export default Counter;
