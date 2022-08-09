import React from 'react';

function ClickMeButton({ count }) {
  return (
    <div>
      <button type="button">
        Click Me!
        (
        {count}
        )
      </button>
    </div>
  );
}

export default ClickMeButton;
