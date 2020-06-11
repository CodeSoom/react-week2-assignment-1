import React from 'react';

export default function MainButton({ display, onClick }) {
  const number = 1;
  return (
    <p>
      <button type="button" onClick={() => onClick({ number })}>
        Click me!(
        {display}
        )
      </button>
    </p>
  );
}
