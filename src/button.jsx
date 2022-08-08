import React, { memo } from 'react';

function Button({ children, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default memo(Button);
