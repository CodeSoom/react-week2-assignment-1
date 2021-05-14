import React from 'react';

export default function Counter({ count, onClickPlusOne }) {
  return (
    <div>
      <button type="button" onClick={onClickPlusOne}>
        Click me!
        (
        {count}
        )
      </button>
    </div>
  );
}
