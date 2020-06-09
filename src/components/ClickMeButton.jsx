import React from 'react';

export default function ClickMeButton({ count, incrementCount }) {
  return (
    <button type="button" onClick={() => incrementCount()}>
      Click me!
      (
      {count}
      )
    </button>
  );
}
