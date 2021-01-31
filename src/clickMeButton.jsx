import React from 'react';

export default function ClickMeButton({ count, onClick }) {
  function handleClickMeButton() {
    return onClick();
  }

  return (
    <button type="button" onClick={handleClickMeButton}>
      Click me!(
      {
        count
      }
      )
    </button>
  );
}
