import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Button({ children, onClick }) {
  return (
    <button type="button" onClick={onClick}>{ children }</button>
  );
}
