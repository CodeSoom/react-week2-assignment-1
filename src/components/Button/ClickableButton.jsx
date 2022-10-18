import React from 'react';

function ClickableButton({ count, handleClick }) {
  return (
    <div>
      <button type="button" onClick={handleClick}>
        Click me!
        (
        { count }
        )
      </button>
    </div>
  );
}

export default ClickableButton;
