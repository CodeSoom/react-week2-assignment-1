import React from 'react';

function Button({ value, setValue }) {
  function handleClick() {
    setValue((prev) => prev + 1);
  }

  return (
    <button type="button" onClick={handleClick}>
      Click me! (
      {value}
      )
    </button>
  );
}

export default Button;
