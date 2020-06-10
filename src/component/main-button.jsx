import React from 'react';

export default function MainButton({ display, onClick }) {
  const increment = 1;
  return (
    <p>
      <button type="button" onClick={() => onClick(increment)}>
        Click me!(
        {display}
        )
      </button>
    </p>
  );
}
