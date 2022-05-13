import React from 'react';

export default function CounterView({ curriedOnCounter, children, value }) {
  return (
    <button type="button" onClick={curriedOnCounter(value)}>{children}</button>
  );
}
