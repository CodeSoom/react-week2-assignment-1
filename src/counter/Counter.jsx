import React from 'react';
import CounterView from './CounterView';

export default function Counter({ onCounter, children, value }) {
  const curriedOnCounter = (countValue) => () => {
    onCounter(countValue);
  };
  return (
    <CounterView curriedOnCounter={curriedOnCounter} value={value}>
      { children }
    </CounterView>
  );
}
