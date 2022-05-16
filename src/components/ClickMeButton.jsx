import React from 'react';

export default function ClickMeButton({ children, onClick }) {
  return (
    <button type="button" onClick={() => onClick(1)}>
      {children}
    </button>
  );
}
