import React from 'react';

export default function Button({ children, count, onClick }) {
  return (
    <button type="button" onClick={() => onClick(count)}>{children}</button>
  );
}
