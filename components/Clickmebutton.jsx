import React from 'react';

function clickMeButton({ count, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Click me!
      (
      { count }
      )
    </button>
  );
}

export default clickMeButton;
