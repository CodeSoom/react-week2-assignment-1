import React from 'react';

function ClickMeButton({ children, onClick }) {
  return (
    <button type="button" onClick={() => onClick(1)}>
      {children}
    </button>
  );
}

export default ClickMeButton;
