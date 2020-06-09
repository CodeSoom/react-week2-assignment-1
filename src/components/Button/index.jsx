import React from 'react';

export default ({ children, onClick }) => (
  <button type="button" onClick={onClick}>{children}</button>
);
