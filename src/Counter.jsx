import React from 'react';

export default function Counter({ onClick, count }) {
  return <button onClick={() => onClick(1)}>Click me ({count})</button>;
}
