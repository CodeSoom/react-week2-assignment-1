import React from 'react';

export default ({ count, onClick }) => (
  <button
    type="button"
    onClick={onClick}
  >
    Click me! (
    {count}
    )
  </button>
);
