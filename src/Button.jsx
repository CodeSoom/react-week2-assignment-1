import React from 'react';

export default function Button({ children, handleClickDirectPlus }) {
  return (
    <button type="button" onClick={() => handleClickDirectPlus(children)}>
      {children}
    </button>
  );
}
