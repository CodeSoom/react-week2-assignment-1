import React from 'react';

export default ({ onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);
