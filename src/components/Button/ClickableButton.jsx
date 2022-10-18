import React from 'react';

function ClickableButton({ count, handleClick }) {
  const increasingCount = 1;
  return (
    <div>
      <button type="button" onClick={() => handleClick(increasingCount)}>
        Click me!
        (
        { count }
        )
      </button>
    </div>
  );
}

export default ClickableButton;
