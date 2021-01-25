import React from 'react';

export default function Button({ count, onClick }) {
  return (
    <p>
      <button type="button" onClick={onClick}>
        Click me!(
        {count}
        )
      </button>
    </p>
  );
}
