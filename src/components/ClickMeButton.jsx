import React from 'react';

export default function ClickMeButton({ count, incrementCount }) {
  return (
    <p>
      <button type="button" onClick={() => incrementCount()}>
        Click me! (
        {count}
        )
      </button>
    </p>
  );
}
