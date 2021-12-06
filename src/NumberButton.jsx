import React from 'react';

function NumberButton({
  onClick,
  value,
}) {
  return <button type="button" onClick={() => onClick(value)}>{value}</button>;
}

export default NumberButton;
