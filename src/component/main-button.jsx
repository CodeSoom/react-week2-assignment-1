import React from 'react';

function MainButton({ count, onClick }) {
  return (
    <p>
      <button type="button" onClick={() => onClick({ count })}>
        Click me!(
        {count}
        )
      </button>
    </p>
  );
}

export default MainButton;
