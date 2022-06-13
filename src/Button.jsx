import React from 'react';

function Button({ value, onClick }) {
  return (
    <button onClick={onClick} type="button">{value}</button>
  );
}

export default Button;
