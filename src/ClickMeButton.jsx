import React from 'react';

function ClickMeButton({ count, onClick }) {
  return (
    <p>
      <button type="button" onClick={() => onClick(1)}>
        Click me! (
        {count}
        )
      </button>
    </p>
  );
}

export default ClickMeButton;
