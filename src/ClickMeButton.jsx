import React from 'react';

export default function ClickMeButton({ number, onClick }) {
  return (
    <button type="button" onClick={() => onClick()}>
      Click me! (
      {number}
      )
    </button>
  );
}
