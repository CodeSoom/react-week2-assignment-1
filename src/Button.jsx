import React from 'react';

export default function Button({ children, onClickNumber }) {
  return (
    <button type="button" onClick={onClickNumber}>
      { children }
    </button>
  );
}
