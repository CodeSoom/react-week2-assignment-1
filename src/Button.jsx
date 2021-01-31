import React from 'react';

function Button({ plus, number, setNumber }) {
  function handleClick() {
    setNumber(number + plus);
  }

  return (
    <button type="button" onClick={handleClick}>{plus}</button>
  );
}

export default Button;
