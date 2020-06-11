import React from 'react';

function Button({ buttonText, onClick }) {
  return (
    <button
      onClick={() => onClick(buttonText)}
      type="button"
    >
      {buttonText}
    </button>
  );
}

export default Button;
