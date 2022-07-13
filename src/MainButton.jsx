import React from 'react';

export default function MainButton({ count, handleClick, updateValue }) {
  return (
    <button type="button" onClick={() => handleClick(updateValue)}>
      Click me!
      {`(${count})`}
    </button>
  );
}
