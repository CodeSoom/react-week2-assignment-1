import React from 'react';

function ClickMeCounter({ count, onClick }) {
  return (
    <>
      <div>Counter</div>
      <br />
      <button type="button" onClick={onClick}>
        Click me (
        {count}
        )
      </button>
    </>
  );
}

export default ClickMeCounter;
