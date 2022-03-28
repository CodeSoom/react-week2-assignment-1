import React from 'react';

export default function Button({ children, setCount }) {
  function handleClick() {
    setCount((prevValue) => prevValue + parseInt(children, 10));
  }

  return (
    <button
      type="button"
      onClick={handleClick}
    >
      { children }
    </button>
  );
}
