import React from 'react';

export default function Button({ children, handleClickNumber }) {
  return (
    <button type="button" onClick={() => handleClickNumber(children)}>
      {children}
    </button>
  );
}
