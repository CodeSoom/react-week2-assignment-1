import React from 'react';
import CounterView from './CounterView';

export default function Counter({ onCounter, children, value }) {
  return (
    <CounterView onCounter={onCounter} value={value}>
      { children }
    </CounterView>
  );
}
