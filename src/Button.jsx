import React from 'react';

export default function Button({ number, children, onClick }) {
  return (
    <button type="button" onClick={() => onClick(number)}>
      { children }
    </button>
  );
}
