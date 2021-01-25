import React from 'react';

function Button(props) {
  const { onClick, children } = props;
  return (
    <button
      type="button"
      onClick={() => onClick(children)}
    >
      {children}
    </button>
  );
}

export default Button;
