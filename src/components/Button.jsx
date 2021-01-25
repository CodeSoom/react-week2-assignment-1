import React from 'react';

function Button({ buttons, onClick }) {
  return (buttons || []).map((i) => (
    <button
      type="button"
      key={i}
      onClick={() => onClick(i)}
    >
      {i}
    </button>
  ));
}

export default Button;
