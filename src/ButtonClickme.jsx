import React from 'react';

function ButtonClickme({ value, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Click me!
      (
      {value}
      )
    </button>
  );
}

export default ButtonClickme;
