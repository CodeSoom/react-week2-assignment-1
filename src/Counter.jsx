import React from 'react';

export default function Counter({ count, onClick }) {
  return (
    <button type="button" onClick={onClick} data-number={1}>
      Click me! (
      { count }
      )
    </button>
  );
}
