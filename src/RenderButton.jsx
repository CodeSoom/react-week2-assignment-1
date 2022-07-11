import React from 'react';

export default function RenderButton({ count, handleClick, updateValue }) {
  return (
    <button type="button" onClick={() => handleClick(updateValue)} value={count}>
      Click me!
      {`(${count})`}
    </button>
  );
}
