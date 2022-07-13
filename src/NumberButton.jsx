import React from 'react';

export default function NumberButton({ handleClick, value }) {
  return (
    <button type="button" onClick={() => handleClick(value)}>
      {value}
    </button>
  );
}
