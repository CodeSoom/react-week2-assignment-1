import React from 'react';

function Button({ children, onClick }) {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
