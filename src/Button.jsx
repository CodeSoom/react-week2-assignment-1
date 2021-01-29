import React from 'react';

function Button({ plus, num, setNum }) {
  function handleClick() {
    setNum(num + plus);
  }

  return (
    <button type="button" onClick={handleClick}>{plus}</button>
  );
}

export default Button;
