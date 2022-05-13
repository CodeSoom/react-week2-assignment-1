import React from 'react';
import CounterView from './CounterView';

const Counter = ({ onCounter, children, value }) => {
  const curriedOnCounter = (countValue) => () => {
    onCounter(countValue);
  };
  return (
    <CounterView curriedOnCounter={curriedOnCounter} value={value}>
      {children}
    </CounterView>
  );
};

export default Counter;
