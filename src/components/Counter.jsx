import React from 'react';

export default function Counter({ count, addByOne }) {
  return (
    <button type="button" onClick={addByOne}>
      Click me!
      (
      {count}
      )
    </button>
  );
}
