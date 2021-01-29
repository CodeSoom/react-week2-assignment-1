import React from 'react';

export default function Button({ children, addByClickedNumber }) {
  return (
    <button type="button" onClick={() => addByClickedNumber(children)}>
      {children}
    </button>
  );
}
