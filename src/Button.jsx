import React from 'react';

export default function Button({ count, onClickOne }) {
  return (
    <button type="button" onClick={onClickOne}>
      Click me! (
      {count}
      )
    </button>
  );
}
