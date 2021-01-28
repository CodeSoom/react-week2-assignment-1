import React from 'react';

function Button({ onClick, i }) {
  return (
    <>
      <button type="button" onClick={() => onClick(i)}>
        {i}
      </button>
    </>
  );
}

export default Button;
