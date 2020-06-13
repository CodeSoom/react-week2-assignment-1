import React from 'react';

export default function Button({ children, onClick }) {
  return (
    <button type="button" onClick={onClick} data-number={children}>{children}</button>
  );
}
