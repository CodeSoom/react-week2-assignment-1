import React from 'react';

export default function Counter({ result, onClick }) {
  return (
    <button type="button" onClick={() => onClick(1)}>
      Click me!(
      {result}
      )
    </button>
  );
}
