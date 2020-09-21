import React from 'react';

function Button({
  value = 1,
  children,
  count,
  onClick,
}) {
  const handleClick = () => {
    onClick(value);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
    >
      {children || `Click me! (${count})`}
    </button>
  );
}

export default Button;
