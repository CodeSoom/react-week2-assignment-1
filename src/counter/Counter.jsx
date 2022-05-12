import React from 'react';
import CounterView from './CounterView';

const Counter = ({ onCounter, children, value }) => {
  const handleCounter = (countValue) => () => {
    onCounter(countValue);
  };
  return (
    <CounterView handleCounter={handleCounter} value={value}>
      {children}
    </CounterView>
  );
};

export default Counter;
