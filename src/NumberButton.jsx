import React from 'react';

export default function NumberButton({ handleClick, value }) {
  return (
    <button type="button" value={value} onClick={(e) => handleClick(e)}>
      {value}
    </button>
  );
}
