import React from 'react';

function Button({ buttonText, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
    >
      {buttonText}
    </button>
  );
}

export default Button;
