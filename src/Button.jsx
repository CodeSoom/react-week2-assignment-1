import React from 'react';

function Button({ count, setCount }) {
  function onClickOne() {
    setCount({ count: count + 1 });
  }
  return (
    <button type="button" onClick={onClickOne}>
      Click me! (
      {count}
      )
    </button>
  );
}

export default Button;
